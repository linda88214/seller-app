class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
    	t.integer :qty
    	t.integer :price
    	t.integer :total

    	t.belongs_to :buyer, index: true
    	t.belongs_to :stock, index: true
    	t.belongs_to :orderstatus, index: true
      t.timestamps
    end
  end
end
