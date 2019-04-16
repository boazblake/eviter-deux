"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "AuthenticateUserPayload",
    embedded: false
  },
  {
    name: "LoggedInUserPayload",
    embedded: false
  },
  {
    name: "SignupUserPayload",
    embedded: false
  },
  {
    name: "RSVP",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Invite",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/boaz-blake-8951e1/shindigit/dev`,
  secret: `${process.env["PRISMA_MANAGEMENT_API_SECRET"]}`
});
exports.prisma = new exports.Prisma();
