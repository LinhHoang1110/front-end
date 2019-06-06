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
        const { handleSubmit, values, setFieldValue } = this.props;
        console.log(this.props)

        return (
            <div>
                <Grid container padding="20px 15px"
                    margin="100px 0px 0px -181px"
                    width="930px" justify='center' alignContent='center'>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={0} style={{ padding: '20px 15px', margin: '100px 0px 0px -190px', width: '930px', boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)" }}>
                            <Typography style={{ margin: "auto", textAlign: "center" }} variant="headline" gutterBottom>
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
                            <FormControl>
                                Remember <input type="checkbox" checked={values.remember} onChange={e => setFieldValue('remember', e.target.checked)} />
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <Button
                                    // variant='extendedFab'
                                    type='submit'
                                    style={{ width: '141px', heigh: '30px', margin: 'auto', backgroundColor: "black", color: "white", borderRadius: "30px" }}
                                    onClick={handleSubmit}
                                >
                                    Signin
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
            password: '',
            remember: false,
        }
    },

    // thế anh ơi đoạn kia check nó là true mới push đúng ko
    // uncomment di het di
    handleSubmit: (values, { props }) => {
        const { remember } = values;

        callApi("api/auth/login", "POST", {
            username: values.username,
            password: values.password,
        }).then(res => {
            if (res) {
                if (remember) {
                    localStorage.setItem("TOKENLOCAL", res.data.token);
                    localStorage.setItem("USERLOCAL", res.data.userFound.username)
                }
                console.log(res)
                console.log(values)
                console.log(remember)
                props.checkAuth(res.data.token, res.data.userFound)
                props.history.push("/")
            } 
            else {
                console.log(remember)
                alert("Thí chủ đang high phải ko vì mật khẩu với password thí chủ nhập vào ko đúng r !!!! ")
            }
        })
    }
})(SignupForm)

const Store = state => state
const action = {
    checkAuth
}

export default connect(Store, action)(Login)