import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Eye,
  Settings,
  Wrench,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const phoneNumber = "+79146711299";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Привет! Я хочу получить бесплатный чек-лист для проверки духовки и варочной панели."
  )}`;

  const steps = [
    {
      number: 1,
      title: "Проверьте питание",
      description: "Убедитесь, что вилка в розетке и не выбило пробки",
      icon: Zap,
    },
    {
      number: 2,
      title: "Осмотрите панель",
      description: "Проверьте коды ошибок и звуковые сигналы",
      icon: Eye,
    },
    {
      number: 3,
      title: "Проверьте настройки",
      description: "Убедитесь в правильности режима и таймера",
      icon: Settings,
    },
    {
      number: 4,
      title: "Проверьте контакты",
      description: "Осмотрите нагревательный элемент (при отключении)",
      icon: Wrench,
    },
    {
      number: 5,
      title: "Итоги",
      description: "Если проблема осталась, требуется помощь специалиста",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-orange-500" />
            <span className="font-bold text-lg text-gray-900">
              Ремонт техники в Краснодаре
            </span>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
          >
            <Phone className="w-4 h-4" />
            {phoneNumber}
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Сломался духовой шкаф или варочная панель?
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Проверьте это ДО вызова мастера и сэкономьте до{" "}
                  <span className="font-bold text-orange-600">1000 рублей</span>!
                </p>
                <p className="text-lg text-gray-600 mb-10">
                  Получите бесплатный чек-лист из 5 простых шагов, которые помогут вам
                  самостоятельно диагностировать проблему за 2 минуты.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Получить чек-лист в WhatsApp
                  </Button>
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  ✓ Бесплатно · ✓ За 2 минуты · ✓ Без регистрации
                </p>
              </div>
              <div className="hidden md:block">
                <Card className="bg-white p-8 shadow-xl border-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Zap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Быстро</h3>
                        <p className="text-gray-600 text-sm">Всего 5 шагов за 2 минуты</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Эффективно</h3>
                        <p className="text-gray-600 text-sm">
                          Решает 80% проблем самостоятельно
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Честно</h3>
                        <p className="text-gray-600 text-sm">
                          От опытного мастера, без развода
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Почему этот чек-лист работает?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-orange-500 mb-4">80%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Проблем решаются сами
                </h3>
                <p className="text-gray-600">
                  Часто техника не работает из-за простых причин: выбитые пробки, неправильные
                  настройки или случайно активированная блокировка.
                </p>
              </Card>
              <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-green-500 mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Экономия до 1000 рублей
                </h3>
                <p className="text-gray-600">
                  Избегните ненужного вызова мастера или приходите подготовленным, что
                  сэкономит время диагностики и ваши деньги.
                </p>
              </Card>
              <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-500 mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Точная диагностика
                </h3>
                <p className="text-gray-600">
                  Вы подготовите информацию, которая поможет мастеру быстро определить
                  проблему и назвать точную стоимость ремонта.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Checklist Steps Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Что вы получите в чек-листе?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              5 простых шагов, которые помогут вам проверить духовку или варочную панель
              самостоятельно
            </p>
            <div className="space-y-6">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <Card
                    key={step.number}
                    className="p-6 md:p-8 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                          <IconComponent className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Шаг {step.number}: {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы сэкономить время и деньги?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Получите бесплатный чек-лист прямо сейчас. Это займет всего 2 минуты!
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Получить чек-лист в WhatsApp
              </Button>
            </a>
            <p className="text-blue-100 mt-6 text-sm">
              Специальное предложение: Используйте код "ЧЕК-ЛИСТ" при заказе ремонта и
              получите 10% скидку на запчасти!
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-orange-500" />
                  Алексей
                </h3>
                <p className="text-gray-400">
                  Мастер по ремонту духовых шкафов и варочных панелей в Краснодаре
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Контакты</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="block text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    {phoneNumber}
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Услуги</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Диагностика</li>
                  <li>✓ Ремонт духовок</li>
                  <li>✓ Ремонт варочных панелей</li>
                  <li>✓ Замена запчастей</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p>
                © 2024 Ремонт бытовой техники в Краснодаре. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
