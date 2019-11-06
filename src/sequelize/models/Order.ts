import * as Sequelize from 'sequelize';

interface OrderAttributes {
  id?: number;
  user: string;
  date: number;
}

interface OrderInstance
  extends Sequelize.Instance<OrderAttributes>,
    OrderAttributes {}

export type OrderModel = Sequelize.Model<OrderInstance, OrderAttributes>;

export const OrderFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): OrderModel => {
  const Order: OrderModel = sequelize.define<OrderInstance, OrderAttributes>(
    'orders',
    {
      id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
      },
      user: { type: DataTypes.STRING },
      date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }
    }
  );

  Order.associate = (models): void => {
    Order.belongsToMany(models.Item,  {
      through: 'orders_items',
      as: 'items',
      foreignKey: 'order_id'
    })
  };

  return Order;
};
