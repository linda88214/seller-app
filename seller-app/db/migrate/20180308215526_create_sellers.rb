class CreateSellers < ActiveRecord::Migration[5.1]
  def change
    create_table :sellers do |t|
    	t.string :username
    	t.string :firstname
    	t.string :lastname
    	t.string :email
    	t.string :password
    	
      t.timestamps
    end
  end
end
