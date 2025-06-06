"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

export default function Outputsection({ aiOutput }: { aiOutput: string }) {
    const editorRef = useRef<Editor>(null)
    useEffect(() => {
        const editorInstance = editorRef.current?.getInstance()
        if (editorInstance) {
            editorInstance.setMarkdown(aiOutput)
        }
    }, [aiOutput])


    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2 className="font-medium text-lg">Your Result</h2>
                <Button className="flex gap-2" onClick={() => navigator.clipboard.writeText(aiOutput)}><Copy className='w-4 h-4' />Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue='Your Result Will Appear Here'
                initialEditType="wysiwyg"
                height='600px'
                useCommandShortcut={true}
                onChange={() => {
                    const content = editorRef.current?.getInstance()?.getMarkdown()
                    if (content) console.log(content)
                }}
            />
        </div>
    )
}