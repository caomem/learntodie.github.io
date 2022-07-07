#!/usr/bin/sh
echo "#!/usr/bin/julia
using Dates, Plots

rectangle(w, h, x, y) = Shape(x .+ [0,w,w,0], y .+ [0,0,h,h])

function mylife(bday::Date; savename::Union{String, Nothing}=nothing)
    days = Dates.value(Dates.Day(Dates.today()-bday))
    plot(legend=false,ticks=false,yaxis=false,xaxis=false)
    for i = 1:80
        for j = 1:52
           plot!(rectangle(0.6,0.6,j+0.2,i+0.2), opacity = .5, fillcolor = (i <= round(days/7)/52 || (i == floor(round(days/7)/52)+1 && j <= round(days/7)%52) ? :black : :white))
        end
    end
    if isnothing(savename)
        plot!()
        println(\"Ploting...\")
    else
        println(\"Saving file as \$savename ...\")
        savefig(savename)
    end
end

if length(ARGS)>0
    mylife(Date(ARGS[1]), savename=(length(ARGS)>1 ? ARGS[2] : \"mylife.png\"))
end" > /tmp/mylife__Temp.jl

julia /tmp/mylife__Temp.jl 1997-10-7 /tmp/mylife__Temp.png
rm /tmp/mylife__Temp.jl

convert -crop 819x640 wall.png /tmp/wall.png
convert /tmp/wall.png /tmp/mylife__Temp.png +append /tmp/wall.png
cp wall.png wallbck.png
mv /tmp/wall.png wall.png
rm wallbck.png /tmp/mylife__Temp.png