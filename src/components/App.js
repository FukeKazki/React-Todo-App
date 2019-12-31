import React, { useState } from 'react'
import 'typeface-roboto'
import { Button, TextField, Box, Container, CssBaseline, List, ListItem, ListItemText, Checkbox } from '@material-ui/core'

const INITIAL_TASK = {
    title: 'Reactのお勉強',
    doing: false,
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

  const isTaskInclude = () => {
      return tasks.some(task => task.title === task_title)
  }

  const addTask = () => {
      setTasks([...tasks, {
          title: task_title,
          doing: false,
      }])
      resetTextField()
  }

  const deleteTask = (task) => {
      setTasks(tasks.filter(x => x !== task))
  }

  const handleCheckboxChanges = task => {
      setTasks(tasks.filter(x => {
          if (x === task) x.doing = !x.doing
          return x
      }))
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
          disabled={task_title === '' || isTaskInclude()}
          variant='contained'
          color='primary'
          onClick={addTask}
          href=''
        >
          作成
        </Button>
      </Box>
      <List
        style={{ marginTop: '48px' }}
        component='ul'>
        {tasks.map(task => (
          <ListItem key={task.title} component='li'>
            <Checkbox
                checked={task.doing}
                value='primary'
                onChange={() => handleCheckboxChanges(task)}
            />
            <ListItemText>{task.title}</ListItemText>
            <Button
                href=''
                onClick={() => deleteTask(task)}
            >
                削除
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default App
