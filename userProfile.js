import React, { useState, useEffect } from "react"

import { useParams, useNavigate } from "react-router-dom"
import {
    Paper,
    Container,
    Button,
    TextField,
    FormGroup,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from "@mui/material"
import { BackendApi } from "../../client/backend-api"
import classes from "./styles.module.css"
import { useUser } from "../../context/user-context"

export const UserProfile = () => {
    // const { userId } = useParams()
    const {user} = useUser();
    const [userId, setUserId] = useState("");
    
    const navigate = useNavigate()
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    })



    const formSubmit = (event) => {
        event.preventDefault()
        BackendApi.user.updateUser(userId, profile)
            .then(() => navigate(-1))


    }

    const updateProfileField = (event) => {
        const field = event.target
        setProfile((profile) => ({ ...profile, [field.name]: field.value }))
    }

    const validateForm = (event) => {
        const { name, value } = event.target
        if (["name", "email", "password"].includes(name)) {
            setProfile((prevProd) => ({ ...prevProd, [name]: value.trim() }))
            if (!value.trim().length) {
                setErrors({ ...errors, [name]: `${name} can't be empty` })
            } else {
                setErrors({ ...errors, [name]: "" })
            }
        }

    }

    useEffect(() => {
        console.log(userId)
        setUserId(user._id);
        if (userId) {
            setProfile({name:user.name,email:user.email,password:user.password})
        }else{
            console.log("error")
            console.log(user.name)
        }
        
    }, [userId])

    return (
        <>
            <Container component={Paper} className={classes.wrapper}>
                <Typography className={classes.pageHeader} variant="h5">
                    Profile Details
                </Typography>
                <form noValidate autoComplete="off" onSubmit={formSubmit}>
                    <FormGroup>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Name"
                                name="name"
                                required
                                value={profile.name}
                                onChange={updateProfileField}
                                onBlur={validateForm}
                                error={errors.name.length > 0}
                                helperText={errors.name}
                            />
                        </FormControl>

                        <FormControl className={classes.mb2}> 
                            <TextField
                                label="Email"
                                name="email"
                                required
                                value={profile.email}
                                onChange={updateProfileField}
                                onBlur={validateForm}
                                error={errors.email.length > 0}
                                helperText={errors.email}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Password"
                                name="password"
                                required
                                value={profile.password}
                                onChange={updateProfileField}
                                onBlur={validateForm}
                                error={errors.password.length > 0}
                                helperText={errors.password}
                            />
                        </FormControl>
                    </FormGroup>
                    <div className={classes.btnContainer}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                navigate(-1)
                            }}
                        >
                            Cancel
                        </Button>

                    </div>
                </form>
            </Container>
        </>
    )
}
