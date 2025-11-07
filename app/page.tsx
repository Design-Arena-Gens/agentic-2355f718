'use client'

import { useState } from 'react'
import { Phone, TrendingUp, AlertCircle, CheckCircle, Search, MapPin, Clock, Star } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('analysis')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Google My Business Ad Optimizer</h1>
              <p className="text-sm text-gray-600 mt-1">রিয়াদ পর্দা ব্যবসার জন্য বিশেষভাবে তৈরি</p>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" />
                <span className="text-sm font-semibold text-green-700">Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-lg shadow-sm p-1 inline-flex gap-1">
          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === 'analysis'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            সমস্যা বিশ্লেষণ
          </button>
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === 'solutions'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            সমাধান
          </button>
          <button
            onClick={() => setActiveTab('optimization')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === 'optimization'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            অপটিমাইজেশন টিপস
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Status Alert */}
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-red-400 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">বর্তমান সমস্যা</h3>
              <p className="text-sm text-red-700 mt-1">
                আপনার Google My Business বিজ্ঞাপনে ইম্প্রেশন এবং ক্লিক আসছে কিন্তু কল আসছে না বা খুব কম আসছে।
                এটি রিয়াদের পর্দা ব্যবসার জন্য একটি সাধারণ সমস্যা।
              </p>
            </div>
          </div>
        </div>

        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-600" />
                সমস্যার কারণ বিশ্লেষণ
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">১. টার্গেটিং সমস্যা</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ভুল কীওয়ার্ড ব্যবহার (সার্চ ইন্টেন্ট মিসম্যাচ)</li>
                    <li>• ভৌগলিক টার্গেটিং সঠিক নয়</li>
                    <li>• ভাষা সেটিং সমস্যা (আরবি/ইংরেজি)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">২. বিজনেস প্রোফাইল সমস্যা</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ফোন নম্বর সঠিকভাবে প্রদর্শিত হচ্ছে না</li>
                    <li>• "Call" বাটন সহজে দেখা যাচ্ছে না</li>
                    <li>• ব্যবসার সময় সঠিক নেই</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">৩. বিজ্ঞাপন কন্টেন্ট সমস্যা</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Call-to-Action দুর্বল</li>
                    <li>• জরুরিত্ব/অফার নেই</li>
                    <li>• মোবাইল অপটিমাইজেশন সমস্যা</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">৪. প্রতিযোগিতা</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• রিয়াদে অনেক পর্দার দোকান</li>
                    <li>• আপনার USP (Unique Selling Point) স্পষ্ট নয়</li>
                    <li>• রিভিউ কম বা নেই</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metrics Comparison */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">আপনার বর্তমান পারফরম্যান্স</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">✓</div>
                  <div className="text-sm text-gray-600 mt-2">ইম্প্রেশন</div>
                  <div className="text-xs text-green-600 mt-1">ভালো আছে</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">✓</div>
                  <div className="text-sm text-gray-600 mt-2">ক্লিক</div>
                  <div className="text-xs text-green-600 mt-1">ভালো আছে</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">✗</div>
                  <div className="text-sm text-gray-600 mt-2">কল</div>
                  <div className="text-xs text-red-600 mt-1">খুব কম</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                তাৎক্ষণিক সমাধান (আজই করুন)
              </h2>

              <div className="space-y-6">
                <div className="border border-green-200 rounded-lg p-5 bg-green-50">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">১. Google My Business প্রোফাইল অপটিমাইজেশন</h3>

                  <div className="space-y-3 ml-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">ক. ফোন নম্বর সেটআপ:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• আপনার সৌদি ফোন নম্বর +966 ফরম্যাটে যোগ করুন</li>
                        <li>• "Primary phone" হিসাবে সেট করুন</li>
                        <li>• নম্বর সবসময় চালু রাখুন</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">খ. ব্যবসার বিবরণ (আরবি + ইংরেজি):</h4>
                      <div className="bg-white p-3 rounded border mt-2">
                        <p className="text-sm font-mono text-gray-800 leading-relaxed">
                          <strong>আরবি:</strong><br />
                          ستائر عصرية وفاخرة في الرياض 🏠✨<br />
                          📞 اتصل الآن للحصول على خصم خاص!<br />
                          🎁 استشارة مجانية | تركيب احترافي<br />
                          ⭐ أفضل الأسعار في الرياض<br /><br />

                          <strong>ইংরেজি:</strong><br />
                          Premium Curtains in Riyadh 🏠✨<br />
                          📞 Call Now for Special Discount!<br />
                          🎁 Free Consultation | Professional Installation<br />
                          ⭐ Best Prices in Riyadh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">২. কীওয়ার্ড অপটিমাইজেশন</h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Call-Intent Keywords ব্যবহার করুন:</h4>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-700 mb-2"><strong>আরবি কীওয়ার্ড:</strong></p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span>• محل ستائر الرياض</span>
                          <span>• تركيب ستائر الرياض</span>
                          <span>• ستائر فخمة الرياض</span>
                          <span>• محل ستائر قريب</span>
                          <span>• ستائر منزلية الرياض</span>
                          <span>• تفصيل ستائر الرياض</span>
                        </div>

                        <p className="text-sm text-gray-700 mb-2 mt-4"><strong>ইংরেজি কীওয়ার্ড:</strong></p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span>• curtains shop riyadh</span>
                          <span>• curtain installation riyadh</span>
                          <span>• curtain store near me</span>
                          <span>• custom curtains riyadh</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-200 rounded-lg p-5 bg-purple-50">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">৩. Google Ads Call Extensions সক্রিয় করুন</h3>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>স্টেপ বাই স্টেপ:</strong></p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li>Google Ads Dashboard → Campaigns → Ad Extensions</li>
                      <li>"Call Extension" নির্বাচন করুন</li>
                      <li>আপনার ফোন নম্বর +966 ফরম্যাটে যোগ করুন</li>
                      <li>"Mobile preferred" সেট করুন</li>
                      <li>"Call reporting" চালু করুন (কল ট্র্যাক করার জন্য)</li>
                    </ol>
                  </div>
                </div>

                <div className="border border-yellow-200 rounded-lg p-5 bg-yellow-50">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">৪. Call-Only Campaigns চালু করুন</h3>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p>এই ক্যাম্পেইনগুলি শুধুমাত্র কল জেনারেট করার জন্য ডিজাইন করা:</p>
                    <ul className="list-disc ml-6 space-y-1 mt-2">
                      <li>শুধুমাত্র মোবাইল ডিভাইসে দেখায়</li>
                      <li>সরাসরি কল বাটন দেখায়</li>
                      <li>ক্লিক করলেই কল হয়</li>
                    </ul>
                    <div className="bg-white p-3 rounded border mt-3">
                      <p className="font-semibold mb-2">নমুনা Ad Text:</p>
                      <p className="text-sm">
                        🏠 ستائر فاخرة - الرياض<br />
                        📞 اتصل الآن - خصم 20%<br />
                        ✅ استشارة مجانية | تركيب سريع
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'optimization' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                উন্নত অপটিমাইজেশন কৌশল
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    ১. সময় ভিত্তিক বিডিং
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    রিয়াদের মানুষ সাধারণত বিকেল ৪টা - রাত ১০টার মধ্যে বেশি সার্চ করে।
                  </p>
                  <div className="bg-purple-50 p-3 rounded mt-2">
                    <p className="text-sm font-semibold mb-1">সুপারিশ:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• পিক আওয়ারে (৪-১০ PM) বিড 30-50% বাড়ান</li>
                      <li>• সপ্তাহান্তে (বৃহস্পতি-শুক্রবার) আরও বেশি বিড</li>
                      <li>• রাতের সময় Ad Schedule সেট করুন</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    ২. হাইপার-লোকাল টার্গেটিং
                  </h3>
                  <div className="bg-blue-50 p-3 rounded mt-2">
                    <p className="text-sm font-semibold mb-2">রিয়াদের প্রধান এলাকা যেখানে টার্গেট করবেন:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold">উচ্চবিত্ত এলাকা:</p>
                        <ul className="list-disc ml-4">
                          <li>Al Olaya</li>
                          <li>Al Malqa</li>
                          <li>Al Nakheel</li>
                          <li>King Fahd District</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">মধ্যবিত্ত এলাকা:</p>
                        <ul className="list-disc ml-4">
                          <li>Al Naseem</li>
                          <li>Al Yasmin</li>
                          <li>Al Sahafa</li>
                          <li>Al Aqiq</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      💡 টিপ: প্রতিটি এলাকার জন্য আলাদা Ad Group তৈরি করুন এবং সেই এলাকার নাম Ad-এ উল্লেখ করুন
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    ৩. কল ট্র্যাকিং এবং অপটিমাইজেশন
                  </h3>
                  <div className="bg-green-50 p-3 rounded mt-2">
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>
                        <strong>Call Tracking Number ব্যবহার করুন:</strong>
                        <p className="text-xs ml-4 mt-1">Google Ads থেকে আলাদা ট্র্যাকিং নম্বর নিন যাতে কোন Ad থেকে কল আসছে বুঝতে পারেন</p>
                      </li>
                      <li>
                        <strong>Conversion Tracking সেটআপ:</strong>
                        <p className="text-xs ml-4 mt-1">প্রতিটি কল যা 60 সেকেন্ডের বেশি = একটি Conversion হিসেবে গণনা করুন</p>
                      </li>
                      <li>
                        <strong>Call Recording:</strong>
                        <p className="text-xs ml-4 mt-1">কল রেকর্ড করে বুঝুন কাস্টমাররা কী খুঁজছে এবং কীভাবে আপনার Ad-কে আরও ভালো করা যায়</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    ৪. সোশ্যাল প্রুফ বাড়ান
                  </h3>
                  <div className="bg-yellow-50 p-3 rounded mt-2">
                    <p className="text-sm text-gray-700 mb-2">কল বাড়ানোর জন্য বিশ্বাসযোগ্যতা জরুরি:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>
                        <strong>Google Reviews:</strong>
                        <p className="text-xs ml-4 mt-1">প্রতিটি কাস্টমারকে Google-এ রিভিউ দিতে বলুন। টার্গেট: কমপক্ষে 50+ রিভিউ, 4.5+ রেটিং</p>
                      </li>
                      <li>
                        <strong>ফটো আপলোড:</strong>
                        <p className="text-xs ml-4 mt-1">আপনার কাজের উচ্চমানের ছবি আপলোড করুন (পর্দার ইনস্টলেশন, শোরুম, ডিজাইন)</p>
                      </li>
                      <li>
                        <strong>Q&A সেকশন:</strong>
                        <p className="text-xs ml-4 mt-1">সাধারণ প্রশ্নের উত্তর দিন যেমন: মূল্য, ডেলিভারি সময়, ওয়ারেন্টি ইত্যাদি</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900 mb-2">৫. অফার এবং Urgency তৈরি করুন</h3>
                  <div className="bg-red-50 p-3 rounded mt-2">
                    <p className="text-sm text-gray-700 mb-2">মানুষ যখন অফার দেখে তখন দ্রুত কল করে:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded border">
                        <p className="font-semibold">নমুনা অফার ১:</p>
                        <p className="text-xs mt-1">📞 اتصل اليوم - خصم 20% على جميع الستائر!</p>
                        <p className="text-xs">(আজই কল করুন - সব পর্দায় ২০% ছাড়!)</p>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <p className="font-semibold">নমুনা অফার ২:</p>
                        <p className="text-xs mt-1">🎁 استشارة وقياس مجاني - اتصل الآن!</p>
                        <p className="text-xs">(বিনামূল্যে পরামর্শ এবং মাপ - এখনই কল করুন!)</p>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <p className="font-semibold">নমুনা অফার ৩:</p>
                        <p className="text-xs mt-1">⚡ عرض لمدة محدودة - تركيب مجاني!</p>
                        <p className="text-xs">(সীমিত সময়ের অফার - বিনামূল্যে ইনস্টলেশন!)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Checklist */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">আজই যা করবেন - চেকলিস্ট ✅</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-bold mb-2">জরুরি (আজই)</h3>
                  <ul className="space-y-2 text-sm">
                    <li>☐ ফোন নম্বর সঠিকভাবে যুক্ত করুন</li>
                    <li>☐ Call Extension সক্রিয় করুন</li>
                    <li>☐ আরবি ভাষায় Ad copy লিখুন</li>
                    <li>☐ ব্যবসার সময় আপডেট করুন</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-bold mb-2">এই সপ্তাহে</h3>
                  <ul className="space-y-2 text-sm">
                    <li>☐ Call-Only Campaign চালু করুন</li>
                    <li>☐ হাইপার-লোকাল টার্গেটিং সেট করুন</li>
                    <li>☐ কাস্টমারদের কাছ থেকে রিভিউ নিন</li>
                    <li>☐ উচ্চমানের ফটো আপলোড করুন</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">মনে রাখবেন 💡</h2>
          <p className="text-lg mb-2">
            ইম্প্রেশন এবং ক্লিক থাকা মানে আপনার বিজ্ঞাপন ঠিকই কাজ করছে!
          </p>
          <p className="text-base opacity-90">
            এখন শুধু কিছু অপটিমাইজেশন করলেই কল আসা শুরু হবে। উপরের সব টিপস ফলো করুন এবং ৭-১৪ দিনের মধ্যে ফলাফল দেখুন।
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur">
              <p className="font-semibold">লক্ষ্য: Call Rate 10%+</p>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur">
              <p className="font-semibold">সময়: 2 সপ্তাহ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            আপনার পর্দা ব্যবসার সাফল্য কামনা করছি! 🎉 রিয়াদ থেকে শুভেচ্ছা 🇸🇦
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Google My Business Ad Optimizer - Specialized for Curtain Business in Riyadh
          </p>
        </div>
      </footer>
    </main>
  )
}
