# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.find_or_create_by(email: 'kbighorse+frontend_test@gmail.com') do |user|
  user.password = 'coeurdalene'
end

Matter.find_or_create_by(description: 'civil court case 1') do |matter|
  matter.status = 'applying'
  matter.permitted_states = ['accepted','closed']
  matter.representation = "document_preperation"
  matter.user = User.find_by(email: 'admin@dev.com')
end

Note.find_or_create_by(body: 'testing') do |note|
  note.matter = Matter.first
end

AdverseParty.find_or_create_by(last_name: 'Jones') do |ap|
  ap.first_name = 'John'
  ap.matter = Matter.first
end
