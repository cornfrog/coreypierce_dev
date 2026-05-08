import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Page from "../components/Page";

const Contact = () => {

    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const inputStyles = {
        "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": {
                borderColor: "white",
                borderWidth: "2px",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        },
        "& .MuiInputLabel-root": {
            color: "white",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
        },
        "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            backgroundColor: "black",
            padding: "0 6px",
        },
        "& .MuiFormHelperText-root": {
            color: "#ff4d4d",
            fontWeight: "bold",
            marginLeft: 0,
        },
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };

    const validate = () => {
        let valid = true;
        const newErrors = {
            email: "",
            subject: "",
            message: ""
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Enter a valid email address";
            valid = false;
        }

        if (!form.subject.trim()) {
            newErrors.subject = "Subject is required";
            valid = false;
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setErrorMsg("");
        setSuccess(false);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                email: form.email,
                subject: form.subject,
                message: form.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setLoading(false);
                setSuccess(true);
                setForm({ email: "", subject: "", message: "" });
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
                setErrorMsg("Failed to send message. Please try again later.");
            });
    };

    return (
        <Page>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: 'black',
                    color: 'white',
                    p: 3
                }}
            >
                <Typography
                    sx={{
                        fontSize: '3rem',
                        mb: 4,
                        opacity: 0,
                        transform: 'translateY(10px)',
                        animation: 'fadeInUp 0.8s ease-out forwards',
                        '@keyframes fadeInUp': {
                            to: {
                                opacity: 1,
                                transform: 'translateY(0)',
                            },
                        },
                    }}
                >
                    Contact Me
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: '100%',
                        maxWidth: 600,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        border: ".2rem solid white",
                        boxShadow: "0px 0px 40px rgb(98, 98, 98)",
                        borderRadius: "1rem",
                        p: { xs: 3, md: 5 },
                        bgcolor: 'black',
                    }}
                >
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={form.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                        sx={inputStyles}
                    />

                    <TextField
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        value={form.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        fullWidth
                        sx={inputStyles}
                    />

                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        value={form.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        multiline
                        rows={5}
                        fullWidth
                        sx={inputStyles}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                            mt: 2,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            bgcolor: 'white',
                            color: 'black',
                            '&:hover': {
                                bgcolor: '#e0e0e0',
                            },
                            '&.Mui-disabled': {
                                bgcolor: '#555',
                                color: '#aaa',
                            }
                        }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </Button>

                    {success && (
                        <Typography sx={{ color: '#4caf50', textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
                            Message sent successfully! I&apos;ll get back to you soon.
                        </Typography>
                    )}

                    {errorMsg && (
                        <Typography sx={{ color: '#ff4d4d', textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
                            {errorMsg}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Page>
    );
};

export default Contact;
