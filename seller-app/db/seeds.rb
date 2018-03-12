# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Seller.create!([
	{username: "linda88214", firstname: "Linda", lastname: "Hu", email: "linda@seller.com"}
])

Stock.create!([
	{itemname: "Black Hat", itemnumber: "BLH029384", description: "Novelty Black Derby Hat", price: 20.99, stock: 29},
	{itemname: "Silver Watch", itemnumber: "SVW847392", description: "Silver Watch from USA", price: 299.99, stock: 11},
	{itemname: "Gold Watch", itemnumber: "GDW738202", description: "Gold Watch from USA", price: 399.99, stock: 7},
	{itemname: "Bracelet", itemnumber: "BRC394792", description: "Personalized Silver Bracelet for Women", price: 129.99, stock: 12}
])

Buyer.create!([
	{name: "Ellen", email: "ellen@yahoo.com", address: "100 E 23 Ave. New York, NY 10021", phonenumber: 1233456789},
	{name: "Nancy", email: "nancy@yahoo.com", address: "20W 21 Street New York, NY 10039", phonenumber: 2123038293},
	{name: "Hoya", email: "hoya111@gmail.com", address: "400 Kelby Street Fort Lee, NJ 12021", phonenumber:2012938473}
])

