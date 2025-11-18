import { Request, Response } from "express";

interface Item {
    id: number;
    name: string;
}

let items: Item[] = [
    {id: 1, name: "Mate"},
    {id: 2, name: "Sillón"}
];


export const getItems = (req: Request, res: Response) => {
    res.json(items);
};



export const getItemById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const item = items.find((i) => i.id === id);

    if (!item) {
        return res.status(404).json({error: "Item no encontrado"});
    }

    res.json(item);
};

export const createItem = (req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "El campo 'name' es obligatorio"});
    }

    const newItem : Item = {
        id: Date.now(),
        name
    };


    items.push(newItem);
    res.status(201).json(newItem);
};



export const updateItem = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name } = req.body;


    const itemIndex = items.findIndex((i) => i.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ error: "Item no encontrado"});
    }

    items[itemIndex].name = name ?? items[itemIndex].name;
    res.json(items[itemIndex]);
};

export const deleteItem = (req: Request, res: Response ) => {
    const id = Number(req.params.id);
    items = items.filter((i) => i.id !== id);

    res.json({ message: "Item eliminado"});
};

