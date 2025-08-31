import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Timer, CheckCircle, XCircle } from "lucide-react"

interface QuestionOption {
  id: string
  text: string
  isCorrect?: boolean
}

interface QuestionCardProps {
  questionNumber: number
  totalQuestions: number
  type: "multiple-choice" | "cesp" | "discursive"
  title: string
  content: string
  options?: QuestionOption[]
  tags?: string[]
  difficulty?: 1 | 2 | 3 | 4 | 5
  timeLimit?: number
  onAnswer?: (answer: string) => void
  onNext?: () => void
  selectedAnswer?: string
  showResult?: boolean
  isCorrect?: boolean
  feedback?: string
  className?: string
}

const QuestionCard = React.forwardRef<HTMLDivElement, QuestionCardProps>(
  ({
    questionNumber,
    totalQuestions,
    type,
    title,
    content,
    options = [],
    tags = [],
    difficulty = 1,
    timeLimit,
    onAnswer,
    onNext,
    selectedAnswer,
    showResult = false,
    isCorrect,
    feedback,
    className,
    ...props
  }, ref) => {
    const [textAnswer, setTextAnswer] = React.useState("")
    const [timeLeft, setTimeLeft] = React.useState(timeLimit || 0)

    React.useEffect(() => {
      if (timeLimit && timeLeft > 0 && !showResult) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        return () => clearTimeout(timer)
      }
    }, [timeLeft, timeLimit, showResult])

    const handleAnswerChange = (value: string) => {
      onAnswer?.(value)
    }

    const handleTextAnswer = () => {
      onAnswer?.(textAnswer)
    }

    const difficultyColors = {
      1: "bg-secondary text-secondary-foreground",
      2: "bg-secondary text-secondary-foreground", 
      3: "bg-accent text-accent-foreground",
      4: "bg-accent text-accent-foreground",
      5: "bg-destructive text-destructive-foreground"
    }

    const difficultyLabels = {
      1: "Básico",
      2: "Fácil",
      3: "Médio", 
      4: "Difícil",
      5: "Expert"
    }

    return (
      <Card ref={ref} className={cn("w-full max-w-4xl mx-auto shadow-medium", className)} {...props}>
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-sm">
                Questão {questionNumber} de {totalQuestions}
              </Badge>
              <Badge className={difficultyColors[difficulty]}>
                {difficultyLabels[difficulty]}
              </Badge>
            </div>
            
            {timeLimit && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Timer className="w-4 h-4" />
                <span className={cn(
                  "font-mono text-sm",
                  timeLeft < 30 && "text-destructive font-bold"
                )}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            )}
          </div>

          {/* Question Content */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {content}
            </p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Answer Section */}
          <div className="space-y-4">
            {type === "multiple-choice" && (
              <RadioGroup
                value={selectedAnswer}
                onValueChange={handleAnswerChange}
                disabled={showResult}
                className="space-y-3"
              >
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className={cn(
                      "flex items-center space-x-3 p-3 rounded-lg border transition-colors",
                      showResult && option.isCorrect && "bg-secondary-light border-secondary",
                      showResult && selectedAnswer === option.id && !option.isCorrect && "bg-destructive/10 border-destructive",
                      !showResult && "hover:bg-muted/50"
                    )}
                  >
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      <span className="font-medium text-sm text-muted-foreground mr-2">
                        {String.fromCharCode(65 + index)})
                      </span>
                      {option.text}
                    </Label>
                    {showResult && option.isCorrect && (
                      <CheckCircle className="w-5 h-5 text-secondary" />
                    )}
                    {showResult && selectedAnswer === option.id && !option.isCorrect && (
                      <XCircle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            )}

            {type === "discursive" && (
              <div className="space-y-3">
                <Label htmlFor="discursive-answer" className="text-sm font-medium">
                  Sua resposta (300-800 palavras):
                </Label>
                <Textarea
                  id="discursive-answer"
                  value={textAnswer}
                  onChange={(e) => setTextAnswer(e.target.value)}
                  disabled={showResult}
                  placeholder="Desenvolva sua resposta aqui, relacionando os conceitos abordados..."
                  className="min-h-[200px] resize-none"
                  maxLength={2000}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{textAnswer.split(' ').filter(w => w.length > 0).length} palavras</span>
                  <span>{textAnswer.length}/2000 caracteres</span>
                </div>
              </div>
            )}
          </div>

          {/* Feedback */}
          {showResult && feedback && (
            <div className={cn(
              "p-4 rounded-lg border-l-4",
              isCorrect ? "bg-secondary-light border-secondary" : "bg-muted border-accent"
            )}>
              <h4 className="font-semibold text-sm mb-2">
                {isCorrect ? "Resposta Correta!" : "Feedback"}
              </h4>
              <p className="text-sm text-muted-foreground">{feedback}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            {!showResult && type === "discursive" && (
              <Button
                onClick={handleTextAnswer}
                disabled={textAnswer.trim().length < 50}
                size="lg"
              >
                Enviar Resposta
              </Button>
            )}
            
            {!showResult && type !== "discursive" && (
              <Button
                onClick={onNext}
                disabled={!selectedAnswer}
                size="lg"
              >
                {questionNumber === totalQuestions ? "Finalizar" : "Próxima"}
              </Button>
            )}

            {showResult && (
              <Button onClick={onNext} size="lg" variant="default">
                {questionNumber === totalQuestions ? "Ver Resultados" : "Continuar"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)

QuestionCard.displayName = "QuestionCard"

export { QuestionCard }