# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create!([
# 	{username: "linda88214", firstname: "Linda", lastname: "Hu", email: "linda@seller.com"}
# ])

Stock.create!([
	{itemname: "Black Hat", itemnumber: "BLH029384", description: "Novelty Black Derby Hat", price: 20, stock: 29},
	{itemname: "Silver Watch", itemnumber: "SVW847392", description: "Silver Watch from USA", price: 299, stock: 11},
	{itemname: "Gold Watch", itemnumber: "GDW738202", description: "Gold Watch from USA", price: 399, stock: 7},
	{itemname: "Bracelet", itemnumber: "BRC394792", description: "Personalized Silver Bracelet for Women", price: 129.99, stock: 12},
	{itemname: "iPhone", itemnumber: "IPH938478", description: "White iPhone 8 Plus", price: 800, stock: 2},
	{itemname: "Juul", itemnumber: "JLV938478", description: "Gold color JUUL Vapor", price: 25, stock: 30},
	{itemname: "Juul Pod", itemnumber: "JLP938479", description: "JUUL Pod Strawberry Flavor", price: 20, stock: 45}
])

Buyer.create!([
	{name: "Ellen", email: "ellen@yahoo.com", address: "100 E 23 Ave. New York, NY 10021", phonenumber: 1233456789},
	{name: "Nancy", email: "nancy@yahoo.com", address: "20W 21 Street New York, NY 10039", phonenumber: 2123038293},
	{name: "Hoya", email: "hoya111@gmail.com", address: "400 Kelby Street Fort Lee, NJ 12021", phonenumber:2012938473}
])

Order.create!([
	{itemname: "Black Hat", qty: 2, total: 40, buyer_id: 1},
	{itemname: "Juul", qty: 1, total: 25, buyer_id: 1},
	{itemname: "Juul Pod", qty: 2, total: 40, buyer_id: 1},
	{itemname: "iPhone", qty: 1, total: 800, buyer_id: 2},
	{itemname: "Gold Watch", qty: 1, total: 399, buyer_id: 3}
])

Orderstatus.create!([
	{total: 399, status: "Pending", note: "Customer will pick up", buyer_id: 2},
	{total: 60, status: "Complete", note: "", buyer_id: 1}
])









