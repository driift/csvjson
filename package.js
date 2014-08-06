Package.describe({
  summary: "Meteor package for csv to json and json to csv conversion"
})

Package.on_use(function (api) {
  api.add_files("csvjson.js", ["client", "server"])
  api.export("csvjson", ["client", "server"])
})