import React, { Component } from 'react';
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
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'


class SignupForm extends Component {

    render() {
        return (
            <div>
                <Grid container justify='center' alignContent='center'>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={4} style={{ padding: '20px 15px', margin: "100px 0px 0px -181px", width: '930px' }}>
                            <Typography style={{ margin: "auto" }} variant="headline" gutterBottom>
                                Register
                        </Typography>
                            <FormControl fullWidth margin='normal' error={!!this.props.touched.username && !!this.props.errors.username}>
                                <InputLabel>Username</InputLabel>
                                <Field
                                    name='username'
                                    render={({ field }) => (
                                        <Input fullWidth {...field} />
                                    )}
                                />
                                <FormHelperText>{this.props.errors.username}</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth margin='normal' error={!!this.props.touched.password && !!this.props.errors.password}>
                                <InputLabel>Password</InputLabel>
                                <Field
                                    name='password'
                                    render={({ field }) => (
                                        <Input fullWidth type='password' {...field} />
                                    )}
                                />
                                <FormHelperText>{this.props.errors.password}</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth margin='normal' error={!!this.props.touched.passwordConfirmation && !!this.props.errors.passwordConfirmation}>
                                <InputLabel>Confirm password</InputLabel>
                                <Field
                                    name='passwordConfirmation'
                                    render={({ field }) => (
                                        <Input fullWidth type='password' {...field} />
                                    )}
                                />
                                <FormHelperText>{this.props.errors.passwordConfirmation}</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth margin='normal'>
                                <Button
                                    variant='extendedFab'
                                    color='primary'
                                    type='submit'
                                    style={{ width: '135px', heigh: '31px', margin: 'auto' }}
                                >
                                    Signup
                                </Button>
                                <Link to='/login'>Already a member</Link>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const Register = withFormik({
    mapPropsToValues() {
        return {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(5, 'Username must have min 5 characters')
            .max(10, 'Username have max 10 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have min characters'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
})(SignupForm)

export default Register