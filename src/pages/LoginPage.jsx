import { useState } from 'react'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import LoginButton from '../components/LoginButton'
import styles from './LoginPage.module.css'

function validate(email, password) {
  const errors = {}
  if (!email) {
    errors.email = '이메일을 입력해주세요'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = '올바른 이메일 형식을 입력해주세요'
  }
  if (!password) {
    errors.password = '비밀번호를 입력해주세요'
  }
  return errors
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(email, password)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setLoading(true)
    // Mock: 인증 로직 없음, 1.5초 후 해제
    setTimeout(() => setLoading(false), 1500)
  }

  const handleEmailChange = (val) => {
    setEmail(val)
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }))
  }

  const handlePasswordChange = (val) => {
    setPassword(val)
    if (errors.password) setErrors((prev) => ({ ...prev, password: '' }))
  }

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        {/* Logo */}
        <div className={styles.logo} aria-label="세탁특공대">
          <span className={styles.logoIcon} aria-hidden="true">🧺</span>
          <span className={styles.logoText}>세탁특공대</span>
        </div>

        {/* Form */}
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
          aria-label="로그인 폼"
        >
          <div className={styles.fields}>
            <EmailInput
              value={email}
              onChange={handleEmailChange}
              error={errors.email}
              disabled={loading}
            />
            <PasswordInput
              value={password}
              onChange={handlePasswordChange}
              error={errors.password}
              disabled={loading}
            />
          </div>

          {/* 비밀번호 찾기 */}
          <div className={styles.forgotWrapper}>
            <a href="#forgot" className={styles.forgotLink}>
              비밀번호 찾기
            </a>
          </div>

          {/* 로그인 버튼 */}
          <div className={styles.buttonWrapper}>
            <LoginButton loading={loading} />
          </div>
        </form>

        {/* 회원가입 */}
        <p className={styles.signup}>
          <span className={styles.signupText}>계정이 없으신가요?</span>
          {' '}
          <a href="#signup" className={styles.signupLink}>
            회원가입
          </a>
        </p>
      </main>
    </div>
  )
}
