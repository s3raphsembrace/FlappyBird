# Questions & Answers

questions = [
  {
      "question": "what equation do you use to calculate gravitational potential energy",
      "answer": "gpe=mgh"
  },
  {
    "question": "q2: number 1-100",
    "answer": "30"
  }
]

# Create the Quiz Function below

score = 0

for question in questions: 
  print(question["question"])
  answer=input("input answer")
  if answer.lower() == question["answer"].lower(): 
    score+=1
  print(question["answer"])
  print(str(score))
