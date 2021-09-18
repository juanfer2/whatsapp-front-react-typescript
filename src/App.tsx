import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { env } from './contants/api.constant'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth } from './middlewares/authentication.middleware'
import avatarImage from './assets/images/avatar.png'
/** Styles */
import './App.css'
/** Actions */
import { healtAction } from './flux/actions/healt.action'
import { getUser } from './flux/actions/user/user.action'

import Navbar from './components/navbar'
import RoutesConfig from './routes'
import SnackAlerBar from './components/snackAlertBar'
import Breadcrumb from './components/breadcrumb'
import { socket } from './services/socketIOService'
import { Button } from '@material-ui/core'
import Message from './components/message'
import ListItem from './components/listItem'
import Card from './components/cards'
import Icon from './components/icon'
import MessageTab from './components/messageTab'
import Layout from './components/layout'

function App() {
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)

    if (isAuth() && !state.userReducer.user) {
      const startGetUser = () => dispatch(getUser())
      startGetUser()
    }
  }, [dispatch])



  return (
    <div className="">
      <SnackAlerBar message="I LOve the Food (**)/" />
      <Router forceRefresh={true}>
        <div className="">
          
          {isAuth() && <Breadcrumb />}
          <Layout 
          header={<Navbar name={'Whatsapp'} />} 
          main={
            <>
            <Message content="This is a message" />
            <Message content="This is a message" type='image' url='https://rickandmortyapi.com/api/character/avatar/667.jpeg' />
            <Message content="This is a message" isRecipient={false} type='image' url='https://rickandmortyapi.com/api/character/avatar/160.jpeg' />
            <Message content="This is my message" isRecipient={false} />
            </>

          }
          leftContent={
            <>
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
              <ListItem avatarImage={avatarImage} title='Jordan Doe'
                description='this is a message' quantity={2} info='10:45'
              />
            </>
          }
          />
        </div>
      </Router>
    </div>
  )
}

export default App
