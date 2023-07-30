import Joi from "joi-browser";
import React, { useState } from "react";
import { createtag } from "../services/tagCreateService";
import Form from "./common/form";
import Input from "./common/input";

class Profile extends Form {
  state = {
    data: { name: "" },
    errors: { name: "" },
    tags: [],
  };

  schema = {
    name: Joi.string().required().min(5).max(25).label("TagName"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { response } = await createtag(data);
      console.log(response);
    } catch (ex) {}
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.data.name}
            onChange={this.handleChange}
            label="TagName"
            name="name"
            type="text"
            error={this.state.errors.name}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default Profile;
