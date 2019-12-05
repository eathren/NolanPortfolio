import React, { Component } from "react"

import Layout from "../components/Layout"

// mui
import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export class ContactItem extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", email: "", message: "" }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      //   .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state

    return (
      <Layout>
        <div className="page-contact flex-center">
          <div className=" center " style={{}}>
            <Container maxWidth="md">
              <Card className="card">
                <h4> Want To Get In Touch? Send A Message!</h4>
                <form
                  onSubmit={this.handleSubmit}
                  name="contact"
                  method="post"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <input type="hidden" name="bot-field" />
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Name"
                        name="name"
                        type="name"
                        fullWidth
                        id="form-input-control-name"
                        color="#8CE9C6"
                        width={16}
                        value={name}
                        onChange={this.handleChange}
                        style={{ marginBottom: "10px" }}
                      ></TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        placeholder="Email"
                        name="email"
                        fullWidth
                        type="email"
                        id="form-input-control-email"
                        width={16}
                        value={email}
                        onChange={this.handleChange}
                        style={{ marginBottom: "10px" }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        placeholder="Message"
                        name="message"
                        id="form-input-control-message"
                        type="text"
                        fullWidth
                        rowsMax="10"
                        multiline
                        width={16}
                        value={message}
                        style={{ marginBottom: "10px" }}
                        onChange={this.handleChange}
                      />
                    </Grid>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={{ marginTop: "20px" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </form>
              </Card>
            </Container>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactItem
