class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
    	t.string :itemname
      t.string :itemnumber
    	t.string :qty
      t.string :total
      t.string :status
      t.string :note

      t.belongs_to :user, index: true
    	t.belongs_to :buyer, index: true
      t.timestamps
    end
  end
end
