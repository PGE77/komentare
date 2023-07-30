import React, { useState } from "react";
import { createtag } from "../services/tagCreateService";
import Form from "./common/form";
import Joi from "joi-browser";

class Profile extends Form {
  state = {
    data: {
      tagName: "",
    },
  };
  schema = {
    tag: Joi.string().required().min(5).max(25),
  };

  doSubmit = async (e) => {
    try {
      const { data } = this.state.tagName;
      const { response } = await createtag(data);
      console.log(response);
      window.location = "/dashboard";
    } catch (ex) {}
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Název tagu"
            value={this.state.tagName}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default Profile;
