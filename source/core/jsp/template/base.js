//
// 基础信息模板
// 获取：当前路径、磁盘列表
//

module.exports = () => ({
  info: 'yv66vgAAADMAtAoANgBLBwBMCgACAE0KAAIATggATwsAUABRCABSBwBTCABUCgAIAFUIAFYIAFcIAFgLAFkAWgsAUABbCwBZAFsKAAgAXAcAXQoANQBeCgAIAF8KAAIAYAoAYQBiBwBjBwBkCgAYAEsIAGUKABgAZgoAFwBfCgAYAF8LABIAZwsAaABpCABqCwBrAGwKADYAbQoAbgBvCgBwAHEHAHIKACUAVQoAJQBzCgB0AHUKAHQAdgoAdAB3CgB0AHgIAHkKAHoAewgAfAoANQB9CAB+CgB0AH8KAHQAgAoAJQCBCgAlAF8HAIIHAIMBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcATAcAhAcAhQcAhgcAggcAgwcAhgcAUwcAYwEAC1N5c0luZm9Db2RlAQA7KExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OylMamF2YS9sYW5nL1N0cmluZzsBAA9Xd3dSb290UGF0aENvZGUBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwcAhwwANwA4AQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMAIgAiQwAigCLAQAHY2hhcnNldAcAhAwAjABJAQAFVVRGLTgBABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADAA3AI0BAAMtPnwBAAN8PC0BAAl0ZXh0L2h0bWwHAIUMAI4AjQwAjwCNDACQAJEBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0DABGAEcMAJIAkwwAlACVBwCWDACXAI0BABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMAJAAmAwAmQCaBwCbDACcAJ0BAAEvBwCeDACfAEkMAKAAoQcAogwAowCkBwClDACmAJMBAAxqYXZhL2lvL0ZpbGUMAKcAkwcAhgwAqACpDACqAKsMAKwAkwwArQCuAQAHb3MubmFtZQcArwwAsABJAQAJdXNlci5uYW1lDABIAEkBAAEJDACtALEMADoAOwwAsgCzAQAESW5mbwEAEGphdmEvbGFuZy9PYmplY3QBABxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0AQAdamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2UBABBqYXZhL2xhbmcvU3RyaW5nAQAPW0xqYXZhL2lvL0ZpbGU7AQAKZ2V0UmVxdWVzdAEAICgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3Q7AQALZ2V0UmVzcG9uc2UBACEoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZTsBAAxnZXRQYXJhbWV0ZXIBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAGZ2V0T3V0AQAfKClMamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyOwEAG2phdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcgEABXByaW50AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAKZ2V0U2Vzc2lvbgEAIigpTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2Vzc2lvbjsBAB5qYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlc3Npb24BABFnZXRTZXJ2bGV0Q29udGV4dAEAICgpTGphdmF4L3NlcnZsZXQvU2VydmxldENvbnRleHQ7AQAcamF2YXgvc2VydmxldC9TZXJ2bGV0Q29udGV4dAEAC2dldFJlYWxQYXRoAQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAPamF2YS9sYW5nL0NsYXNzAQALZ2V0UmVzb3VyY2UBACIoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL25ldC9VUkw7AQAMamF2YS9uZXQvVVJMAQAHZ2V0UGF0aAEACWdldFBhcmVudAEABmNoYXJBdAEABChJKUMBAAd2YWx1ZU9mAQAVKEMpTGphdmEvbGFuZy9TdHJpbmc7AQALdG9VcHBlckNhc2UBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBABYoSUkpTGphdmEvbGFuZy9TdHJpbmc7AQAJbGlzdFJvb3RzAQARKClbTGphdmEvaW8vRmlsZTsAIQA1ADYAAAAAAAQAAQA3ADgAAQA5AAAAEQABAAEAAAAFKrcAAbEAAAAAAAEAOgA7AAEAOQAAARAAAwALAAAAuyvAAAJNLLYAA04stgAEOgQtEgW5AAYCAMYADi0SBbkABgIApwAFEgc6BbsACFkSCbcACjoGuwAIWRIJtwAKOgcSCzoIEgw6CRkEEg25AA4CAC0ZBbkADwIAGQQZBbkAEAIAGQYZCLYAEVcZByotwAAStgATtgARVxkGGQe2ABS2ABFXGQYZCbYAEVcstgAVGQa2ABS2ABanACI6ChkHuwAYWbcAGRIatgAbGQq2ABy2ABu2AB22ABFXBKwAAQBIAJcAmgAXAAEAPAAAADsABP4AJgcAPQcAPgcAP0EHAED/AHEACgcAQQcAQgcAPQcAPgcAPwcAQwcARAcARAcAQwcAQwABBwBFHgAAAEYARwABADkAAADvAAMABgAAAMcSCU0ruQAeAQC5AB8BABIguQAhAgDGABkruQAeAQC5AB8BABIguQAhAgBNpwAcKrYAIhIgtgAjtgAkTrsAJVkttwAmtgAnTacAH04qtgAiEiC2ACO2ACQ6BLsAJVkZBLcAJrYAJ027ABhZtwAZLAO2ACi4ACm2ACq2ABssBLYAK7YAG7YAHU0SLLgALU4SLrgALToEKiy2AC86BbsAGFm3ABkstgAbEjC2ABsZBbYAGxIwtgAbLbYAGxIwtgAbGQS2ABu2AB2wAAEAAwBHAEoAFwABADwAAAAOAAT8AC4HAEMYQgcARRsAAABIAEkAAQA5AAAAhAAEAAUAAABhEglNKwMEtgAxEiC2ADKaAD24ADNOAzYEFQQtvqIALLsAGFm3ABkstgAbLRUEMrYANAMFtgAxtgAbEgm2ABu2AB1NhAQBp//TpwAXuwAYWbcAGSy2ABsSILYAG7YAHU0ssAAAAAEAPAAAABEABP4AGAcAQwcASgH5AC8CEwAA',
  // 检测数据库函数支持
  probedb: 'yv66vgAAADMAfwoAKgA9BwA+CgACAD8KAAIAQAgAQQsAQgBDCABEBwBFCABGCgAIAEcIAEgIAEkIAEoLAEsATAsAQgBNCwBLAE0KAAgATgcATwoAKQBQCgAIAFEKAAIAUgoAUwBUBwBVBwBWCgAYAD0IAFcKABgAWAoAFwBRCgAYAFEHAFkIAFoIAFsIAFwIAF0IAF4IAF8IAGAKAGEAYggAYwgAZAcAZQcAZgEABjxpbml0PgEAAygpVgEABENvZGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwA+BwBnBwBoBwBZBwBlBwBmBwBZBwBFBwBVAQALUHJvYmVkYkNvZGUBADsoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3Q7KUxqYXZhL2xhbmcvU3RyaW5nOwcAaQwAKwAsAQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMAGoAawwAbABtAQAHY2hhcnNldAcAZwwAbgBvAQAFVVRGLTgBABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADAArAHABAAMtPnwBAAN8PC0BAAl0ZXh0L2h0bWwHAGgMAHEAcAwAcgBwDABzAHQBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0DAA6ADsMAHUAdgwAdwB4BwB5DAB6AHABABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMAHMAewEAEGphdmEvbGFuZy9TdHJpbmcBABVjb20ubXlzcWwuamRiYy5Ecml2ZXIBABhjb20ubXlzcWwuY2ouamRiYy5Ecml2ZXIBAB9vcmFjbGUuamRiYy5kcml2ZXIuT3JhY2xlRHJpdmVyAQAVb3JnLnBvc3RncmVzcWwuRHJpdmVyAQAhd2VibG9naWMuamRiYy5tc3NxbHNlcnZlcjQuRHJpdmVyAQAsY29tLm1pY3Jvc29mdC5zcWxzZXJ2ZXIuamRiYy5TUUxTZXJ2ZXJEcml2ZXIBABhjb20uaW5ldC5wb29sLlBvb2xEcml2ZXIHAHwMAH0AfgEAAwkxCgEAAwkwCgEAB1Byb2JlZGIBABBqYXZhL2xhbmcvT2JqZWN0AQAcamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdAEAHWphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlAQATW0xqYXZhL2xhbmcvU3RyaW5nOwEACmdldFJlcXVlc3QBACAoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0OwEAC2dldFJlc3BvbnNlAQAhKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2U7AQAMZ2V0UGFyYW1ldGVyAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAGZ2V0T3V0AQAfKClMamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyOwEAG2phdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcgEABXByaW50AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAPamF2YS9sYW5nL0NsYXNzAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsAIQApACoAAAAAAAMAAQArACwAAQAtAAAAEQABAAEAAAAFKrcAAbEAAAAAAAEALgAvAAEALQAAARAAAwALAAAAuyvAAAJNLLYAA04stgAEOgQtEgW5AAYCAMYADi0SBbkABgIApwAFEgc6BbsACFkSCbcACjoGuwAIWRIJtwAKOgcSCzoIEgw6CRkEEg25AA4CAC0ZBbkADwIAGQQZBbkAEAIAGQYZCLYAEVcZByotwAAStgATtgARVxkGGQe2ABS2ABFXGQYZCbYAEVcstgAVGQa2ABS2ABanACI6ChkHuwAYWbcAGRIatgAbGQq2ABy2ABu2AB22ABFXBKwAAQBIAJcAmgAXAAEAMAAAADsABP4AJgcAMQcAMgcAM0EHADT/AHEACgcANQcANgcAMQcAMgcAMwcANwcAOAcAOAcANwcANwABBwA5HgAAADoAOwABAC0AAACwAAQABgAAAIIQB70AHlkDEh9TWQQSIFNZBRIhU1kGEiJTWQcSI1NZCBIkU1kQBhIlU00SCU4DNgQVBCy+ogBMLBUEMrgAJle7ABhZtwAZLbYAGywVBDK2ABsSJ7YAG7YAHU6nACA6BbsAGFm3ABkttgAbLBUEMrYAGxIotgAbtgAdToQEAaf/sy2wAAEANwBaAF0AFwABADAAAAAUAAT+ADAHADwHADcBbAcAORz6AAUAAA==',
})
  