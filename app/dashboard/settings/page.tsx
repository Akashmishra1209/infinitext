"use client";

import React, { useEffect, useState } from 'react'
import { UserProfile } from '@clerk/nextjs'
import { toast } from "sonner"
import { AI_MODELS, DEFAULT_AI_MODEL } from '@/utils/AIModel'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'

export default function Settings() {
  const [model, setModel] = useState(DEFAULT_AI_MODEL)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setModel(window.localStorage.getItem("infinitext-ai-model") ?? DEFAULT_AI_MODEL)
  }, [])

  const saveModel = () => {
    setSaving(true)
    window.localStorage.setItem("infinitext-ai-model", model)
    toast.success("AI model preference saved")
    setSaving(false)
  }

  return (
    <div className="flex flex-col gap-6 p-6 md:p-10">
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Content generation model</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-500">Choose the model to try first. If it is unavailable, Infinitext automatically uses the next configured model.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <select
                value={model}
                onChange={(event) => setModel(event.target.value)}
                className="h-10 flex-1 rounded-md border border-slate-200 bg-white px-3 text-sm"
                aria-label="Content generation model"
              >
                {AI_MODELS.map((item) => (
                  <option key={item.id} value={item.id}>{item.name} - {item.provider}</option>
                ))}
              </select>
              <Button onClick={saveModel} disabled={saving}>Save model</Button>
            </div>
          </CardContent>
        </Card>
        <UserProfile/>
        <Toaster />
    </div>
  )
}