class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
    	t.string :itemname 
    	t.string :itemnumber
    	t.string :description
    	t.string :price 
    	t.integer :stock 

      t.timestamps
    end
  end
end
