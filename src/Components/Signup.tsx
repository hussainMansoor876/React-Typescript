import React, { ChangeEvent, useState, MouseEvent } from 'react'
import { Button, Stack } from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TextInputField from './TextInputField'

const Signup = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setlastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = (event: MouseEvent) => {
    // firstNameRef.current.className += ` validate-input`
    // let interavl = setInterval(() => {
    //   if (firstNameRef?.current) {
    //     console.log('hello')
    //     // firstNameRef.current.style.backgroundColor = `rgba(152, 225, 255, ${opacity})`
    //     // firstNameRef.current.style.borderColor = `rgba(64, 198, 255, ${opacity})`

    //     // setOpacity(opacity - 0.1)
    //   }

    //   if (opacity === 0.5) {
    //     clearInterval(interavl)
    //   }
    // }, 100)

    if (!firstName?.length || !lastName?.length || !password?.length || !email?.length) {
      setIsClicked(true)

      return setTimeout(() => {
        setIsClicked(false)
      }, 500)
    }
    console.log({
      firstName, lastName, password, email, phoneNumber
    })
  }

  const validateEmail = (e: string) => {
    return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }

  return (
    <div className='main'>
      <div className='firstRow'>
        <Stack sx={{ display: 'flex', justifyContent: 'center' }} spacing={2} direction='row'>
          <TextInputField
            label='First Name'
            id='reddit-input'
            variant='filled'
            style={{ marginTop: 11 }}
            inputProps={{
              className: `${isClicked && !firstName?.length ? 'validate-input input-transition' : 'input-transition'}`
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextInputField
            label='Last Name'
            id='reddit-input'
            variant='filled'
            style={{ marginTop: 11, marginBottom: 11 }}
            value={lastName}
            inputProps={{
              className: `${isClicked && firstName?.length && !lastName?.length ? 'validate-input' : 'input-transition'}`
            }}
            onChange={(e) => setlastName(e.target.value)}
          />

        </Stack>
        <PhoneInput
          inputClass={`phoneInput ${isClicked && firstName?.length && lastName?.length && !phoneNumber?.length ? 'validate-input' : 'input-transition'}`}
          country={'us'}
          disableCountryCode={true}
          placeholder='Phone number'
          disableDropdown={true}
          buttonClass={isClicked && firstName?.length && lastName?.length && !phoneNumber?.length ? 'validate-input' : 'input-transition'}
          value={phoneNumber}
          onChange={((e) => setPhoneNumber(e))}
        />

        <TextInputField
          label='Email'
          type='email'
          id='reddit-input'
          variant='filled'
          fullWidth
          error={!email?.length ? false : validateEmail(email)?.length ? false : true}
          helperText='Invalid Email address'
          value={email}
          inputProps={{
            className: `${isClicked && firstName?.length && lastName?.length && phoneNumber?.length && !email?.length && 'validate-input'}`
          }}
          onChange={(e) => setEmail(e.target.value)}
          // value={email}
          // onChange={(e) => { setEmail(e.target.value) }}

          style={{ marginTop: 11 }}
        />
        <TextInputField
          label='Password'
          type='password'
          id='reddit-input'
          variant='filled'
          fullWidth
          value={password}
          inputProps={{
            className: `${isClicked && firstName?.length && lastName?.length && phoneNumber?.length && email?.length && !password?.length && 'validate-input'}`
          }}
          onChange={(e) => setPassword(e.target.value)}
          // value={email}
          // onChange={(e) => { setPassword(e.target.value) }}
          // onchange={onchange>(e:number)}
          style={{ marginTop: 11 }}
        />

        <Button
          sx={{
            marginTop: 2,
            padding: 2,
            borderRadius: '1',
            ml: 1,
            color: '#FFFFFF'
          }}
          fullWidth
          variant="contained"
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Signup
