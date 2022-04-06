import React, { useState, FormEvent } from 'react'
import { Stack, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import PhoneInput from 'react-phone-input-2'
import TextInputField from './TextInputField'
import { capitalizeLetter, validateEmail, regexCondition } from '../utils/helpers'

const Signup = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setlastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = () => {

    console.log('regexCondition', regexCondition.test(password))

    if (firstName === '' || lastName === '' || password === '' || phoneNumber === '' || email === '') {
      setIsClicked(true)

      return setTimeout(() => {
        setIsClicked(false)
      }, 500)
    }

    if (!regexCondition.test(password)) {
      return
    }
  }

  const validatePhoneCode = (e: string): void => e?.startsWith('1') === false ? setPhoneNumber(`1${e}`) : setPhoneNumber(e)

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
              className: `${isClicked && firstName === '' ? 'validate-input input-transition' : 'input-transition'}`
            }}
            value={firstName}
            onChange={(e) => setFirstName(capitalizeLetter(e.target.value))}
          />

          <TextInputField
            label='Last Name'
            id='reddit-input'
            variant='filled'
            style={{ marginTop: 11, marginBottom: 11 }}
            value={lastName}
            inputProps={{
              className: `${isClicked && firstName !== '' && lastName === '' ? 'validate-input' : 'input-transition'}`
            }}
            onChange={(e) => setlastName(capitalizeLetter(e.target.value))}
          />

        </Stack>
        <PhoneInput
          inputClass={`phoneInput ${isClicked && firstName !== '' && lastName !== '' && phoneNumber === '' ? 'validate-input' : 'input-transition'}`}
          country={'us'}
          disableCountryCode={true}
          // countryCodeEditable={false}
          placeholder='Phone number'
          disableDropdown={true}
          buttonClass={isClicked && firstName !== '' && lastName !== '' && phoneNumber === '' ? 'validate-input' : 'input-transition'}
          value={phoneNumber}
          onChange={validatePhoneCode}
        />

        <TextInputField
          label='Email'
          type='email'
          id='reddit-input'
          variant='filled'
          fullWidth
          error={email === '' ? false : (validateEmail(email) === null || validateEmail(email)?.length !== 0) ? false : true}
          helperText={email !== '' && (validateEmail(email) === null || validateEmail(email)?.length !== 0) ? 'Invalid Email address' : null}
          value={email}
          inputProps={{
            className: `${isClicked && firstName !== '' && lastName !== '' && phoneNumber !== '' && email === '' && 'validate-input'}`
          }}
          onChange={(e) => setEmail(e.target.value?.toLocaleLowerCase())}
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
            className: `${isClicked && firstName !== '' && lastName !== '' && phoneNumber !== '' && email !== '' && password === '' && 'validate-input'}`
          }}
          helperText={!regexCondition.test(password) ? 'Oops You need a password longer than 8 characters with numbers and letters' : null}
          error={!regexCondition.test(password) ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: 11 }}
        />
        <Button
          variant='contained'
          className='form-btn'
          onClick={handleClick}
        >{loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : 'Next'}</Button>
      </div>
    </div>
  )
}

export default Signup