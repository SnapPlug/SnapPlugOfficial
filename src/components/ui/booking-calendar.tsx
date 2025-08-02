"use client"

import * as React from "react"
import { CalendarIcon, Clock, Video, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface BookingCalendarProps {
  className?: string
}

export function BookingCalendar({ className }: BookingCalendarProps) {
  const [date, setDate] = React.useState<Date>()
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const timeSlots = [
    "09:00",
    "10:00", 
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00"
  ]

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  return (
    <div className={cn("bg-white rounded-2xl shadow-2xl overflow-hidden", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8">
        
        {/* Left Section - Profile */}
        <div className="lg:col-span-1 flex flex-col items-center text-center">
          <div className="relative mb-6">
            {/* Profile Image */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="/images/SnapPlugLogo.png" 
                alt="SnapPlug" 
                className="w-full h-full object-cover"
              />
            </div>
            </div>
          
        </div>

        {/* Right Section - Booking Calendar */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            
            {/* Call Details */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm mb-1">SnapPlug</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Discovery Call</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>60분</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  <span>화상 회의 (확정 시 상세 정보 제공)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">날짜와 시간을 선택하세요</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Calendar Section */}
                <div>
                  {/* Calendar Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevMonth}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h4 className="text-lg font-medium text-gray-900">
                      {format(currentMonth, "yyyy년 M월", { locale: ko })}
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextMonth}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Calendar */}
                  <div className="border rounded-lg p-4 bg-white dark:bg-white">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border-0"
                      disabled={(date) => {
                        // 오늘 이전 날짜와 주말 비활성화
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        const dayOfWeek = date.getDay()
                        return date < today || dayOfWeek === 0 || dayOfWeek === 6
                      }}
                    />
                  </div>
                </div>

                {/* Time Slots Section */}
                {date && (
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">
                      {format(date, "M월 d일", { locale: ko })} 가능한 시간
                    </h4>
                    <div className="space-y-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className="w-full h-12 text-sm justify-start"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    
                    {/* No Available Times Message */}
                    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 text-center">
                        {format(currentMonth, "M월", { locale: ko })}에 가능한 시간이 없습니다
                      </p>
                      <Button
                        variant="link"
                        className="text-blue-600 p-0 h-auto text-sm w-full justify-center"
                        onClick={nextMonth}
                      >
                        다음 달 보기 →
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 