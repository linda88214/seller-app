class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
    	t.string :itemname
    	t.integer :qty
    	t.integer :total

      t.belongs_to :user, index: true
    	t.belongs_to :buyer, index: true
    	t.belongs_to :orderstatus, index: true
      t.timestamps
    end
  end
end
