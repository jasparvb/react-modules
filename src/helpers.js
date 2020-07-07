function choice(items){
    let randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
}

function remove(items, item){
    const idx = items.indexOf(item);
    if(idx !== -1) {
        return [...items.slice(0, idx), ...items.slice(idx + 1)];
    }
}

export {choice, remove};