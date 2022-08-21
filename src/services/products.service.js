"use strict";

import { utils } from "./utils.service.js";
import apiProducts from "../../api.json";

export default {
  query,
};

async function query(filterBy = {}) {
  var products = apiProducts.data
  return products;
}
