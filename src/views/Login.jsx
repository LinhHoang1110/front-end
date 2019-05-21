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
import { withFormik } from 'formik'

class SignupForm extends Component {

    render() {
        return (
                <div>
                    <Grid container justify='center' alignContent='center'>
                        <Grid item xs={6} md={4}>
                            <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '100px', width: '930px' }}>
                                <Typography style={{ margin: '0 395px 0 0' }} variant="headline" gutterBottom>
                                    Đăng nhập
                        </Typography>
                                <FormControl fullWidth margin='normal'>
                                    <InputLabel>Username</InputLabel>
                                    <Input name='username' fullWidth />
                                </FormControl>

                                <FormControl fullWidth margin='normal'>
                                    <InputLabel>Password</InputLabel>
                                    <Input fullWidth name='password' type='password' />
                                </FormControl>
                                <FormControl fullWidth margin='normal'>
                                    <Button
                                        variant='extendedFab'
                                        color='primary'
                                        type='submit'
                                        style={{ width: '135px', heigh: '31px', margin: '0 0 0 389px' }}
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
        }
    },
})(SignupForm)

export default Login