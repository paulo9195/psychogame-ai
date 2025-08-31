import { useState } from "react"
import { QuestionCard } from "@/components/ui/question-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Brain, ArrowLeft, Timer } from "lucide-react"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: "1",
      type: "multiple-choice" as const,
      title: "Condicionamento Clássico",
      content: "No experimento de Pavlov, qual é o termo usado para descrever a resposta natural e automática a um estímulo incondicionado?",
      options: [
        { id: "a", text: "Resposta condicionada", isCorrect: false },
        { id: "b", text: "Resposta incondicionada", isCorrect: true },
        { id: "c", text: "Estímulo neutro", isCorrect: false },
        { id: "d", text: "Estímulo condicionado", isCorrect: false }
      ],
      tags: ["Behaviorismo", "Condicionamento Clássico", "Pavlov"],
      difficulty: 2 as const,
      timeLimit: 120
    },
    {
      id: "2", 
      type: "multiple-choice" as const,
      title: "Reforçamento Operante",
      content: "Segundo Skinner, qual tipo de reforçamento é mais eficaz para manter um comportamento a longo prazo?",
      options: [
        { id: "a", text: "Reforçamento contínuo", isCorrect: false },
        { id: "b", text: "Reforçamento intermitente", isCorrect: true },
        { id: "c", text: "Punição positiva", isCorrect: false },
        { id: "d", text: "Punição negativa", isCorrect: false }
      ],
      tags: ["Behaviorismo", "Reforçamento", "Skinner"],
      difficulty: 3 as const,
      timeLimit: 120
    },
    {
      id: "3",
      type: "multiple-choice" as const,
      title: "Teoria da Aprendizagem Social",
      content: "Bandura demonstrou que crianças podem aprender comportamentos agressivos através de:",
      options: [
        { id: "a", text: "Condicionamento clássico apenas", isCorrect: false },
        { id: "b", text: "Reforçamento direto apenas", isCorrect: false },
        { id: "c", text: "Observação e imitação", isCorrect: true },
        { id: "d", text: "Punição sistemática", isCorrect: false }
      ],
      tags: ["Aprendizagem Social", "Bandura", "Modelagem"],
      difficulty: 2 as const,
      timeLimit: 120
    },
    {
      id: "4",
      type: "multiple-choice" as const,
      title: "Extinção Comportamental",
      content: "No contexto do condicionamento operante, a extinção ocorre quando:",
      options: [
        { id: "a", text: "O comportamento é punido severamente", isCorrect: false },
        { id: "b", text: "O reforçamento é removido completamente", isCorrect: true },
        { id: "c", text: "Um novo comportamento é condicionado", isCorrect: false },
        { id: "d", text: "O estímulo discriminativo é alterado", isCorrect: false }
      ],
      tags: ["Extinção", "Condicionamento Operante"],
      difficulty: 3 as const,
      timeLimit: 120
    },
    {
      id: "5",
      type: "multiple-choice" as const,
      title: "Generalização de Estímulos",
      content: "A generalização de estímulos é mais provável de ocorrer quando:",
      options: [
        { id: "a", text: "Os estímulos são completamente diferentes", isCorrect: false },
        { id: "b", text: "Os estímulos compartilham características similares", isCorrect: true },
        { id: "c", text: "O reforçamento é intermitente", isCorrect: false },
        { id: "d", text: "A resposta é extinguida", isCorrect: false }
      ],
      tags: ["Generalização", "Estímulos", "Aprendizagem"],
      difficulty: 2 as const,
      timeLimit: 120
    },
    {
      id: "6",
      type: "discursive" as const,
      title: "Análise Integrativa - Behaviorismo",
      content: "Com base nas questões anteriores sobre behaviorismo, explique como os princípios de condicionamento clássico e operante podem ser aplicados em conjunto para modificar um comportamento específico. Use um exemplo prático e discuta as implicações éticas dessa aplicação.",
      tags: ["Behaviorismo", "Aplicação Prática", "Ética", "Síntese"],
      difficulty: 4 as const,
      timeLimit: 600
    }
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  if (showResults) {
    const objectiveQuestions = questions.slice(0, 5)
    const correctAnswers = objectiveQuestions.reduce((acc, question, index) => {
      const userAnswer = answers[index]
      const correctOption = question.options?.find(opt => opt.isCorrect)
      return acc + (userAnswer === correctOption?.id ? 1 : 0)
    }, 0)

    const objectiveScore = (correctAnswers / objectiveQuestions.length) * 100
    const totalScore = objectiveScore * 0.6 + 75 * 0.4 // Mock discursive score

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto shadow-strong">
            <CardContent className="p-8 text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-foreground">Bloco Concluído!</h1>
                <p className="text-lg text-muted-foreground">
                  Parabéns! Você completou mais um bloco de estudos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-secondary">{Math.round(totalScore)}%</h3>
                  <p className="text-sm text-muted-foreground">Nota Final</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{correctAnswers}/5</h3>
                  <p className="text-sm text-muted-foreground">Objetivas Corretas</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-accent">+250</h3>
                  <p className="text-sm text-muted-foreground">Pontos Ganhos</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-foreground">Feedback da Questão Discursiva</h4>
                <p className="text-sm text-muted-foreground text-left">
                  Sua resposta demonstrou boa compreensão dos conceitos de condicionamento clássico e operante. 
                  Você conseguiu integrar os conceitos de forma coerente e apresentou um exemplo prático relevante. 
                  Para melhorar ainda mais, considere explorar mais profundamente as implicações éticas dos métodos behavioristas.
                </p>
                <div className="flex justify-between text-sm">
                  <span>Compreensão Conceitual: 32/40</span>
                  <span>Coerência: 16/20</span>
                  <span>Conectividade: 18/25</span>
                  <span>Linguagem: 12/15</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={() => window.location.reload()}>
                  Revisar Respostas
                </Button>
                <Button variant="hero" onClick={() => setCurrentQuestion(0)}>
                  Próximo Bloco
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={handlePrevious} disabled={currentQuestion === 0}>
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-semibold">Behaviorismo - Bloco 1</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Timer className="w-4 h-4" />
              <span className="text-sm font-mono">2:00</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progresso do Bloco</span>
            <span>{currentQuestion + 1} de {questions.length}</span>
          </div>
          <ProgressBar
            value={currentQuestion + 1}
            max={questions.length}
            variant="glow"
            size="md"
            animated
          />
        </div>

        {/* Question */}
        <QuestionCard
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          type={questions[currentQuestion].type}
          title={questions[currentQuestion].title}
          content={questions[currentQuestion].content}
          options={questions[currentQuestion].options}
          tags={questions[currentQuestion].tags}
          difficulty={questions[currentQuestion].difficulty}
          timeLimit={questions[currentQuestion].timeLimit}
          selectedAnswer={answers[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      </div>
    </div>
  )
}

export default Quiz