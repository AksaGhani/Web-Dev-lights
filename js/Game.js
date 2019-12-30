let dragged; // to keep track of what's being dragged, use this later!

function onDragStart(event)
{
    let target = event.target;
    if (target && target.nodeName === 'IMG')
    { // If target is an image
        dragged = target;
        event.dataTransfer.setData('text', target.id);
        event.dataTransfer.dropEffect = 'move';
        // Make it half transparent
        event.target.style.opacity = .3;
    }
}

function onDragEnd(event)
{
    if (event.target && event.target.nodeName === 'IMG')
    {
        // Reset the transparency
        event.target.style.opacity = ''; // reset opacity when drag ends
        dragged = null;
    }
}

// Adding event listeners
const vehicles = document.querySelector('.vehicles');
vehicles.addEventListener('dragstart', onDragStart);
vehicles.addEventListener('dragend', onDragEnd);