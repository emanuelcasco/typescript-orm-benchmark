import * as Sequelize from 'sequelize';

interface ItemAttributes {
  id?: number;
  name: string;
  value: number;
}

interface ItemInstance
  extends Sequelize.Instance<ItemAttributes>,
    ItemAttributes {}

export type ItemModel = Sequelize.Model<ItemInstance, ItemAttributes>;

export const ItemFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): ItemModel => {
  const Item: ItemModel = sequelize.define<ItemInstance, ItemAttributes>(
    'items',
    {
      id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: DataTypes.STRING },
      value: { type: DataTypes.NUMERIC }
    }
  );

  Item.associate = (models): void => {
    Item.belongsToMany(models.Order, {
      through: 'orders_items',
      as: 'orders',
      foreignKey: 'item_id'
    });
  };

  return Item;
};
