'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Grow Smarter with AI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          GrowIQ helps your business answer customers 24/7, book appointments,
          and boost sales — all powered by AI.
        </p>
        <Button
          className="bg-white text-red-600 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100"
          onClick={() => setChatVisible(true)}
        >
          Try GrowIQ Free
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { icon: "🤖", title: "Smart Chatbot", desc: "Answers questions, books customers instantly." },
          { icon: "📱", title: "Auto-Replies", desc: "WhatsApp & Facebook automated responses." },
          { icon: "📊", title: "Insights Dashboard", desc: "See how your business is growing." },
          { icon: "🎯", title: "AI Marketing", desc: "Create posts, ads & flyers automatically." },
        ].map((f, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">{f.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Demo Chatbot Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Try Our Demo Chatbot</h2>
        <p className="text-gray-600 mb-6">
          Ask a question like a customer would — GrowIQ will respond instantly.
        </p>
        {chatVisible ? (
          <div className="max-w-md mx-auto border rounded-2xl shadow-lg p-6 bg-white">
            <p className="text-sm text-gray-500 mb-2">(Demo responses powered by AI placeholder)</p>
            <div className="bg-gray-100 p-3 rounded-xl text-left mb-3">
              <p className="text-gray-800">👤 Customer: What are your opening hours?</p>
            </div>
            <div className="bg-red-100 p-3 rounded-xl text-left">
              <p className="text-red-700">🤖 GrowIQ: We’re open Monday–Saturday, 9am–8pm!</p>
            </div>
          </div>
        ) : (
          <Button
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-red-700"
            onClick={() => setChatVisible(true)}
          >
            Launch Demo
          </Button>
        )}
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">₦10,000 setup fee + ₦5,000/month</p>
              <Button className="bg-red-600 text-white w-full py-3 rounded-2xl hover:bg-red-700">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">₦20,000 setup fee + ₦10,000/month</p>
              <Button className="bg-red-600 text-white w-full py-3 rounded-2xl hover:bg-red-700">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">Ready to grow your business with GrowIQ?</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded-2xl font-semibold hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>
          <a
            href="mailto:hello@growiq.ai"
            className="bg-red-600 px-6 py-3 rounded-2xl font-semibold hover:bg-red-700"
          >
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
}
