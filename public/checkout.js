// This is your test publishable API key.
const stripe = Stripe("pk_test_51JIVaHSIfk35L8nB78p7tybIiB1kYKqPzPA8OcEveJb1eJhWOQjgD7O86yiZzh3HYsnnTgBHZTfzLVdpCQgz5AEb00G2yRVdEz");

const amount_pay =  50;
// const detail_first_name =  document.querySelector("#detail_first_name").value;
// const detail_last_name =  document.querySelector("#detail_last_name").value;
// const detail_email =  document.querySelector("#detail_email").value;
// const detail_phone =  document.querySelector("#detail_phone").value;
// const detail_line1 =  document.querySelector("#detail_line1").value;
// const detail_city =  document.querySelector("#detail_city").value;
// const detail_line2 =  document.querySelector("#detail_line2").value;
// const detail_zipcode =  document.querySelector("#detail_zipcode").value;
// console.log('amount :'+amount_pay);
// The items the customer wants to buy
const items = [{ id: "xl-tshirt", amount: amount_pay }];


let elements;

initialize();

document
  .querySelector("#payment-form")
  .addEventListener("submit", handleSubmit);

// Fetches a payment intent and captures the client secret
async function initialize() {
  const { clientSecret } = await fetch("https://digitractive.com/cityprojectglobal/stripephp/create.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  }).then((r) => r.json());

  elements = stripe.elements({ clientSecret });

  const paymentElementOptions = {
    layout: "accordion",
  };

  const paymentElement = elements.create("payment", paymentElementOptions);
  paymentElement.mount("#payment-element");
}

async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  // Prepare form data to send to the backend
  const formData = {
    amount: document.querySelector("#stripe-amount").value,
    first_name: document.querySelector("#detail_first_name").value,
    last_name: document.querySelector("#detail_last_name").value,
    email: document.querySelector("#detail_email").value,
    phone: document.querySelector("#detail_phone").value,
    address_line1: document.querySelector("#detail_line1").value,
    city: document.querySelector("#detail_city").value,
    address_line2: document.querySelector("#detail_line2").value,
    zipcode: document.querySelector("#detail_zipcode").value,
  };
  try {
    // Send form data to PHP backend for saving
    const saveResponse = await fetch("https://digitractive.com/cityprojectglobal/stripephp/save_data.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const saveResult = await saveResponse.json();

    if (!saveResponse.ok || saveResult.error) {
      throw new Error(saveResult.message || "Failed to save data");
    }
   // console.log("Data saved successfully:", saveResult);
   // Proceed with Stripe payment confirmation
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://citiesprojectglobal.vercel.app/complete-payment",
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
      } else {
        showMessage("An unexpected error occurred.");
      }
    }
  } catch (err) {
    console.error("Error handling form submission:", err.message);
    showMessage(err.message);
  } finally {
    setLoading(false);
  }
}
// ------- UI helpers -------

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageContainer.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}
