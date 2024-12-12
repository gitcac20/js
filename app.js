const apiKey = '7d15ed2a4e1e9a4fc0fffda9044b1b99'; 
const ciudad = 'Buenos Aires,AR';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`;


const apiDataDiv = document.getElementById('api-data');


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    
    apiDataDiv.innerHTML = `
      <p><strong>Ciudad:</strong> ${data.name}</p>
      <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
      <p><strong>Clima:</strong> ${data.weather[0].description}</p>
      <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
      <img src="${iconUrl}" alt="Ícono del clima" />
    `;
  })
  .catch(error => {
    console.error('Error:', error);
    apiDataDiv.innerHTML = `<p>Error al obtener los datos del clima.</p>`;
  });

  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const feedback = document.getElementById("form-feedback");

  
  const validateField = (input, condition) => {
      if (condition) {
          input.classList.remove("error");
          input.classList.add("success");
          return true;
      } else {
          input.classList.remove("success");
          input.classList.add("error");
          return false;
      }
  };
  })

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("form-feedback");
    const errorMessages = {
        name: "El nombre es obligatorio.",
        email: "El correo electrónico debe contener un '@'.",
        message: "El mensaje es obligatorio.",
    };

    const validateField = (input, condition, errorMessage) => {
        const errorSpan = document.getElementById(`${input.id}-error`);
        if (condition(input.value)) {
            input.classList.remove("error");
            input.classList.add("success");
            errorSpan.style.display = "none";
        } else {
            input.classList.add("error");
            input.classList.remove("success");
            errorSpan.textContent = errorMessage;
            errorSpan.style.display = "block";
        }
    };

    const validateForm = () => {
        let isValid = true;

        validateField(nameInput, (value) => value.trim() !== "", errorMessages.name);
        if (!nameInput.classList.contains("success")) isValid = false;

        validateField(emailInput, (value) => value.includes("@"), errorMessages.email);
        if (!emailInput.classList.contains("success")) isValid = false;

        validateField(messageInput, (value) => value.trim() !== "", errorMessages.message);
        if (!messageInput.classList.contains("success")) isValid = false;

        return isValid;
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateForm()) {
            feedback.textContent = "Formulario enviado exitosamente.";
            feedback.style.color = "green";
            form.reset();
            setTimeout(() => {
                feedback.textContent = "";
            }, 5000);
        } else {
            feedback.textContent = "Por favor, corrige los errores.";
            feedback.style.color = "red";
            setTimeout(() => {
                feedback.textContent = "";
            }, 5000);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.1)"; 
        card.style.transition = "transform 0.3s ease"; 
      });
  
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)"; 
      });
    });
  });
  