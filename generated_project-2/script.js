
class TripEntry {
    constructor(id, destination, startDate, endDate, notes) {
        this.id = id;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.notes = notes;
    }

    toJSON() {
        return {
            id: this.id,
            destination: this.destination,
            startDate: this.startDate,
            endDate: this.endDate,
            notes: this.notes
        };
    }
}

function loadTripsFromStorage() {
    const tripsJSON = localStorage.getItem('trips');
    if (!tripsJSON) {
        return [];
    }
    try {
        const plainTrips = JSON.parse(tripsJSON);
        return plainTrips.map(tripData => new TripEntry(
            tripData.id,
            tripData.destination,
            tripData.startDate,
            tripData.endDate,
            tripData.notes
        ));
    } catch (e) {
        console.error("Error parsing trips from localStorage:", e);
        return [];
    }
}

function saveTripsToStorage(tripsArray) {
    const plainTrips = tripsArray.map(trip => trip.toJSON());
    localStorage.setItem('trips', JSON.stringify(plainTrips));
}

function generateId() {
    return Date.now().toString();
}

// Global array to hold trip entries
let trips = loadTripsFromStorage();

// Placeholder for renderItinerary function (to be implemented elsewhere if not already)
function renderItinerary() {
    console.log("Rendering itinerary...", trips);
    // This function should update the DOM to display the current trips array
}

/**
 * Validates the form data.
 * @param {Object} formData - The form data to validate.
 * @param {string} formData.destination
 * @param {string} formData.startDate
 * @param {string} formData.endDate
 * @returns {{valid: boolean, errors: Object}} - Validation result.
 */
function validateForm(formData) {
    const errors = {};
    let valid = true;

    if (!formData.destination) {
        errors.destination = "Destination is required.";
        valid = false;
    }
    if (!formData.startDate) {
        errors.startDate = "Start Date is required.";
        valid = false;
    }
    if (!formData.endDate) {
        errors.endDate = "End Date is required.";
        valid = false;
    }

    if (formData.startDate && formData.endDate) {
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);
        if (start > end) {
            errors.endDate = "End Date cannot be before Start Date.";
            valid = false;
        }
    }

    return { valid, errors };
}

/**
 * Displays a temporary feedback message below the form.
 * @param {string} message - The message to display.
 * @param {'error' | 'success'} type - The type of message (for styling).
 */
function showFeedback(message, type) {
    const feedbackElement = document.getElementById('form-feedback');
    if (!feedbackElement) {
        console.error("Feedback element with ID 'form-feedback' not found.");
        return;
    }

    feedbackElement.textContent = message;
    feedbackElement.className = `feedback-message ${type}`;
    feedbackElement.style.display = 'block';

    setTimeout(() => {
        feedbackElement.style.display = 'none';
        feedbackElement.textContent = '';
        feedbackElement.className = '';
    }, 5000); // Message disappears after 5 seconds
}

/**
 * Handles the form submission event.
 * @param {Event} event - The submit event.
 */
function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('trip-form');
    const formData = {
        destination: form.elements['destination'].value.trim(),
        startDate: form.elements['startDate'].value,
        endDate: form.elements['endDate'].value,
        notes: form.elements['notes'].value.trim()
    };

    const { valid, errors } = validateForm(formData);

    if (!valid) {
        let errorMessage = "Please correct the following errors:\n";
        for (const field in errors) {
            errorMessage += `- ${errors[field]}\n`;
            // Optionally, highlight the invalid fields
            const inputElement = form.elements[field];
            if (inputElement) {
                inputElement.classList.add('is-invalid'); // Add a class for styling invalid fields
            }
        }
        showFeedback(errorMessage, 'error');
    } else {
        // Clear any previous invalid styles
        Array.from(form.elements).forEach(element => element.classList.remove('is-invalid'));

        const newTrip = new TripEntry(
            generateId(),
            formData.destination,
            formData.startDate,
            formData.endDate,
            formData.notes
        );

        trips.push(newTrip);
        saveTripsToStorage(trips);
        renderItinerary();
        form.reset();
        showFeedback("Trip added successfully!", 'success');
    }
}

// Attach handleFormSubmit to the form's submit event
document.addEventListener('DOMContentLoaded', () => {
    const tripForm = document.getElementById('trip-form');
    if (tripForm) {
        tripForm.addEventListener('submit', handleFormSubmit);
    } else {
        console.error("Form with ID 'trip-form' not found.");
    }

    // Initial render of the itinerary
    renderItinerary();
});


export { TripEntry, loadTripsFromStorage, saveTripsToStorage, generateId, trips, renderItinerary, validateForm, showFeedback, handleFormSubmit };
