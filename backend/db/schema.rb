# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_14_191952) do

  create_table "combinations", force: :cascade do |t|
    t.string "name"
    t.integer "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "distances", force: :cascade do |t|
    t.string "name"
    t.integer "lightyears"
    t.integer "combination_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fuels", force: :cascade do |t|
    t.string "name"
    t.integer "kjoules", limit: 32
    t.integer "combination_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
