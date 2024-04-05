import React from 'react'

import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	styled,
	TextField,
} from '@mui/material'

const RadioStyled = styled(Radio)({
	color: '#7f00ff',
	'&.Mui-checked': {
		color: '#7f00ff',
	},
})

const CheckboxStyled = styled(Checkbox)({
	color: '#7f00ff',
	'&.Mui-checked': {
		color: '#7f00ff',
	},
})

type Gender = 'male' | 'female' | 'other'

const radioList: { value: Gender; label: string }[] = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
]

const hobbiesList: { value: string; label: string }[] = [
	{ value: 'reading', label: 'Reading' },
	{ value: 'gaming', label: 'Gaming' },
	{ value: 'coding', label: 'Coding' },
	{ value: 'travelling', label: 'Travelling' },
]

const countriesList: { value: string; label: string }[] = [
	{ value: 'india', label: 'India' },
	{ value: 'usa', label: 'USA' },
	{ value: 'uk', label: 'UK' },
	{ value: 'australia', label: 'Australia' },
	{ value: 'canada', label: 'Canada' },
	{ value: 'japan', label: 'Japan' },
	{ value: 'china', label: 'China' },
	{ value: 'russia', label: 'Russia' },
	{ value: 'germany', label: 'Germany' },
	{ value: 'italy', label: 'Italy' },
	{ value: 'mexico', label: 'Mexico' },
	{ value: 'south africa', label: 'South Africa' },
	{ value: 'egypt', label: 'Egypt' },
]

const TextFieldStyled = styled(TextField)({
	marginBottom: 15,
	'& label.Mui-focused': {
		color: '#7f00ff',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#B2BAC2',
	},
	'& .MuiOutlinedInput-root': {
		borderRadius: '25px',
		'& fieldset': {
			borderColor: '#B2BAC2',
		},
		'&:hover fieldset': {
			borderColor: '#B2BAC2',
		},
		'&.Mui-focused fieldset': {
			border: '1px solid #7f00ff',
			borderColor: '#7f00ff',
		},
	},
})

const SelectStyled = styled(Select)({
	'&.MuiOutlinedInput-root': {
		borderRadius: '25px',
		'&:hover fieldset': {
			borderColor: '#B2BAC2',
		},
		'&.Mui-focused fieldset': {
			border: '1px solid #7f00ff',
			borderColor: '#7f00ff',
		},
	},
})

const Registration = () => {
	interface FormObj {
		firstName: string
		lastName: string
		email: string
		password: string
		gender: string
		hobbies: string[]
		country: string
	}

	const handleChange = () => {
	}

	const handleSubmit = () => {
		console.log('Form submitted', formObj)
	}

	return (
		<>
			<Grid container spacing={2}>
				<Box
					component="form"
					sx={{
						width: { xs: '100%', sm: '50%' },
						margin: { xs: 'auto' },
						border: '1px solid #E5EAF2',
						borderRadius: '25px',
						padding: '25px',
					}}
					autoComplete="off"
				>
					<Grid item xs={12}>
						<h1>Registration Form</h1>
					</Grid>

					<Grid container>
						<Grid
							sx={{ paddingRight: { sm: 1 } }}
							item
							xs={12}
							sm={6}
						>
							<TextFieldStyled
								fullWidth
								label="First Name"
								name="firstName"
								type="text"
								placeholder="Enter first name"
							/>
						</Grid>
						<Grid
							sx={{ paddingLeft: { sm: 1 } }}
							item
							xs={12}
							sm={6}
						>
							<TextFieldStyled
								fullWidth
								label="Last Name"
								name="lastName"
								type="text"
								placeholder="Enter last name"
							/>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<TextFieldStyled
							fullWidth
							label="Email"
							name="email"
							type="email"
							placeholder="Enter email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextFieldStyled
							fullWidth
							label="Password"
							name="password"
							type="password"
							placeholder="Enter password"
						/>
					</Grid>
					<Grid sx={{ mb: '15px' }} item xs={12}>
						<FormControl>
							<FormLabel
								sx={{
									'&.Mui-focused': {
										color: '#7f00ff',
									},
								}}
							>
								Gender
							</FormLabel>
							<RadioGroup row>
								{radioList?.length > 0 &&
									radioList?.map((item, i) => {
										return (
											<FormControlLabel
												key={i}
												label={item.label}
												value={item.value}
												control={<RadioStyled />}
												name="gender"
											/>
										)
									})}
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid sx={{ mb: '15px' }} item xs={12}>
						<FormLabel
							sx={{
								'&.Mui-focused': {
									color: '#7f00ff',
								},
							}}
						>
							Hobbies
						</FormLabel>
						<FormGroup
							sx={{ display: 'flex', flexDirection: 'row' }}
						>
							{hobbiesList?.length > 0 &&
								hobbiesList?.map((item, i) => {
									return (
										<FormControlLabel
											key={i}
											control={<CheckboxStyled />}
											label={item.label}
											value={item.value}
											name="hobbies"
										/>
									)
								})}
						</FormGroup>
					</Grid>
					<Grid item xs={12} sx={{ mb: '15px' }}>
						<FormControl fullWidth>
							<InputLabel
								sx={{
									'&.Mui-focused': {
										color: '#7f00ff',
									},
								}}
							>
								Age
							</InputLabel>
							<SelectStyled label="Age" name="country">
								{countriesList?.length > 0 &&
									countriesList?.map((item, i) => {
										return (
											<MenuItem
												key={i}
												value={item.value}
											>
												{item.label}
											</MenuItem>
										)
									})}
							</SelectStyled>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<TextFieldStyled
							multiline
							fullWidth
							minRows={3}
							maxRows={5}
							label="Your Message"
						/>
					</Grid>

					<Grid item xs={12}>
						<Box>
							<Button
								sx={{
									mt: 1,
									padding: '10px 22px',
									borderRadius: '25px',
									backgroundColor: '#7f00ff',
									'&:hover': {
										backgroundColor: '#7f10ff',
									},
								}}
								type="button"
								variant="contained"
								onClick={handleSubmit}
							>
								Submit
							</Button>
						</Box>
					</Grid>
				</Box>
			</Grid>
		</>
	)
}

export default Registration
