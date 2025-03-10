import fetchData from "./fetchData"

// Abriendo Data Base
export const openDDBB = indexedDB.open("app-data", 1);

// Comprueba si la DDBB está creada. Caso TRUE → accede, Caso FALSE la crea y accede. Solo se ejecuta una vez
openDDBB.onupgradeneeded = () => {
    const db = openDDBB.result;

    // Creando almacenes de objetos
    db.createObjectStore("balance", { autoIncrement: true })
    db.createObjectStore("transactions", { autoIncrement: true })
    db.createObjectStore("budgets", { autoIncrement: true })
    db.createObjectStore("pots", { autoIncrement: true })

    // Llamando a la función fetchData para obtener los datos y almacenarlos en la DDBB
    openDDBB.addEventListener("success", () => {
        fetchData().then(({ balance, transactions, budgets, pots }) => {
            transactions.forEach(transaction => openDDBB.onsuccess().createObject("transactions", "readwrite", transaction));
            budgets.forEach(budget => openDDBB.onsuccess().createObject("budgets", "readwrite", budget));
            pots.forEach(pot => openDDBB.onsuccess().createObject("pots", "readwrite", pot));
            openDDBB.onsuccess().createObject("balance", "readwrite", balance);
        })
    })
}

openDDBB.onsuccess = () => {
    const db   = openDDBB.result;

    // Abre una transacción en la DDBB y retorna el almacén de objetos. 
    // Sus parámetros son el nombre del almacén y el tipo de acción a realizar
    function openTransaction (storeName, action){
        const IDBTransaction = db.transaction(storeName, action);
        return IDBTransaction.objectStore(storeName);
    }
    
    // Retorna un objeto con métodos para crear, leer, actualizar y eliminar objetos en la DDBB
    return{
        createObject : (storeName, action, object) => openTransaction(storeName, action).add(object),
        readDDBB     : (storeName, action) => {
            return new Promise((resolve) => {
                let data = [];
                openTransaction(storeName, action).openCursor().onsuccess = (e) => {
                    const cursor = e.target.result;
                    if(cursor){
                        data.push(cursor.value);
                        cursor.continue();
                    }else{ resolve(data) }// La última iteración resuelve la promesa
                }
            })
        },
        updateObject : (storeName, action, key, object) => openTransaction(storeName, action).put(object, key),
        deleteObject : (storeName, action, id) => openTransaction(storeName, action).delete(id)
    }
}