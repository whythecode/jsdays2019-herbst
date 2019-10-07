console.log('DOM');

// Search
document.querySelector('.myDiv'); // gibt den ersten Element zurück
document.querySelectorAll('.myDiv'); // gibt alle Elemente zurück (als Array)
//document.getElementById()
//document.getElementsByName()
//document.getElementsByTagName()
//document.getElementsByClassName()

// Create
const myExtraDiv = document.createElement('div');
myExtraDiv.id = 'myextradiv';

const myChildDiv = document.createElement('div');
myChildDiv.id = 'mychilddiv';

myExtraDiv.appendChild(myChildDiv);

document.body.append(myExtraDiv);

// Delete
//myChildDiv.remove();
myExtraDiv.remove();

// Listen to Events
myExtraDiv.onclick = () => {};
myExtraDiv.addEventListener('click', () => {});

// Create Events

// Performance
