// Use DOM manipulation to select each of the three blog spaces on our website
const mouseEvents = document.getElementById("mouse-events");
const keyboardEvents = document.getElementById("keyboard-events");
const formEvents = document.getElementById("form-events");
const focusEvents = document.getElementById("focus-blur");
const eventDelegation = document.getElementById("event-delegation");

// Mouse Events: Detect when a button is hovered over and when the hover ends. Display messages for each state.
mouseEvents.addEventListener('mouseover', () => {
    console.log("Mouse on");
});

mouseEvents.addEventListener('mouseout', () => {
    console.log("Mouse off");
});

// Keyboard Events: Capture input from a text field, displaying the last key pressed.

function lastKey(key) {
    keyboardEvents.value = key.code;
    console.log(`${key.code}`);
}

document.addEventListener('keydown', lastKey);

// Form Events: Handle form submission, preventing the default behavior and displaying a submission message.

formEvents.addEventListener('click', () => {
    if (focusEvents.value === "" || focusEvents.value === null) {
        focusEvents.setCustomValidity('Please put content in the focus and blur section');
    } else {
        focusEvents.setCustomValidity("");
        alert("Form submitted successfully!");
    }
});

// Focus Events: Update a message when an input field gains or loses focus.

focusEvents.addEventListener('focus', () => {
    focusEvents.setAttribute('placeholder', "We are focused!");
});

focusEvents.addEventListener('blur', () => {
    focusEvents.setAttribute('placeholder', "Check our focus and blur events here!");
});

// Event Delegation: Use a container element with several buttons. 
// Use event delegation to handle clicks on any button in the container and display a unique message for each.

eventDelegation.addEventListener('click', (button) => {
    console.log(`${button.target.innerHTML}`);
});