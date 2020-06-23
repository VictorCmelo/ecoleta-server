import { Request, Response } from 'express';
import knex from '../database/connection';


class ItemsController{
  async  index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map( item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `https://server-ecoleta-base.herokuapp.com/uploads/${item.image}`,
      };
    });
  
    return response.json(serializedItems);
  }
}

export default ItemsController;