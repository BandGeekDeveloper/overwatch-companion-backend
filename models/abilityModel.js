const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const abilitySchema = new Schema({
 name: {
    type: String,
    required: true,
 },

 type: {
   type: String
 },

 isMain: {
   type: Boolean,
 },

 isSecondary: {
   type: Boolean
 },

 clipSize: {
   type: Number,
   nullable: true
 },

 fireRate: {
   type: Number,
   nullable: true
 },

 projectileSpeed: {
   type: Number,
   nullable: true
 },

 duration: {
   type: String,
   nullable: true
 },

 cooldown: {
   type: Number,
   nullable: true
 },

 radius: {
   type: Number,
   nullable: true
 },

 canHeadshot: {
   type: Boolean
 },

 isDamage: {
    type: Boolean
 },

 isHeal: {
    type: Boolean
 },

 isSupport: {
    type: Boolean
 },

 isPassive: {
    type: Boolean
 },

 hitPoints: {
    type: String,
    nullable: true,
 },

 healingPoints: {
    type: String,
    nullable: true
 },

 description: {
    type: String
 }
});

module.exports = mongoose.model("Ability", abilitySchema);
