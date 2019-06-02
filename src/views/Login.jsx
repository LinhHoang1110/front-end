import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'
// import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { withFormik, Field } from 'formik'
import callApi from "../utils/ApiCaller"
import { checkAuth } from "../actions/vapeActions"
import { connect } from "react-redux"

class SignupForm extends Component {

    render() {
        const { handleSubmit } = this.props;
        console.log(this.props)

        return (
            <div>
                <Grid container justify='center' alignContent='center'>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={0} style={{ padding: '20px 15px', margin: '100px 0px 0px -190px', width: '930px', boxShadow: "0px !important" }}>
                            <Typography style={{ margin: "auto" }} variant="headline" gutterBottom>
                                Đăng nhập
                        </Typography>
                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Username</InputLabel>
                                <Field
                                    name='username'
                                    render={({ field }) => (
                                        <Input fullWidth {...field} />
                                    )}
                                />
                            </FormControl>

                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Password</InputLabel>
                                <Field
                                    name='password'
                                    render={({ field }) => (
                                        <Input fullWidth type='password' {...field} />
                                    )}
                                />
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <Button
                                    variant='extendedFab'
                                    color='primary'
                                    type='submit'
                                    style={{ width: '135px', heigh: '31px', margin: 'auto' }}
                                    onClick={handleSubmit}
                                >
                                    Signup
                                </Button>
                                <Link to='/register'>Not a memmber ? </Link>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const Login = withFormik({
    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },
    handleSubmit: (values, { props }) => {
        callApi("api/auth/login", "POST", {
            username: values.username,
            password: values.password,
        }).then( res => {
            // localStorage.setItem("USER", res.data.token);
            console.log(res)
            props.checkAuth(res.data.token, res.data.userFound)
            props.history.push("/")
        })
    }
})(SignupForm)

const Store = state => state
const action = {
    checkAuth
}

export default connect(Store, action)(Login)