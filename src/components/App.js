import React, { useState } from 'react'
import 'typeface-roboto'
import { Button, TextField, Box, Container, CssBaseline, List, ListItem, ListItemText } from '@material-ui/core'

const INITIAL_TASK = {
    id: 1,
    title: 'Reactのお勉強'
}

const App = () => {
  const [tasks, setTasks] = useState([INITIAL_TASK])
  const [task_title, setTask_title] = useState('')

  const handleTextFieldChanges = e => {
      setTask_title(e.target.value)
  }
  const resetTextField = () => {
      setTask_title('')
  }

  const addTask = () => {
      setTasks([...tasks, {
          id: tasks.length + 1,
          title: task_title,
      }])
      resetTextField()
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        mt={5}
        display='flex'
        justifyContent='space-around'
      >
        <TextField
          label="タイトル"
          value={task_title}
          onChange={handleTextFieldChanges}
        />
        <Button
          disabled={task_title === ''}
          variant='contained'
          color='primary'
          onClick={addTask}
          href=''>
          作成
        </Button>
      </Box>
      <List
        style={{ marginTop: '48px' }}
        component='ul'>
        {tasks.map(task => (
          <ListItem key={task.id} component='li'>
            <ListItemText>{task.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default App
